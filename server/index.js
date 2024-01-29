const messages = require("../speechToText/proto/speechToText_pb.js");
const services = require("../speechToText/proto/speechToText_grpc_pb.js");
const speech = require("@google-cloud/speech");
const grpc = require("@grpc/grpc-js");
const {
  recognizedOptions,
} = require("@grpc/grpc-js/build/src/channel-options.js");
const stream = require("stream");

const client = new speech.SpeechClient({
  keyFilename: "./STT-google-client-oAuth.json",
});

let recognizeStream = client.streamingRecognize({
  config: {
    encoding: "LINEAR16",
    sampleRateHertz: 16000,
    languageCode: "En-US",
    enableSpeakerDiarization: true,
    model: "latest_long",
    diarizationConfig: {
      enableSpeakerDiarization: true,
      minSpeakerCount: 2,
      maxSpeakerCount: 2,
    },
  },
  interimResults: true,
});

const rStream = new stream.Readable({
  read() {},
});

rStream.pipe(recognizeStream);

async function STT(call, callback) {
  recognizeStream.on("data", (data) => {
    const transcription = data.results[0]?.alternatives?.[0]?.transcript;
    if (data.results[0]?.isFinal) {
      const finalTranscription =
        "whole sentence :" +
        data.results[0]?.alternatives?.[0]?.words
          ?.map((w) => w.word)
          ?.join(" ");

      let serverResponse = new messages.TextResponse();
      serverResponse.setTextResponse(finalTranscription);
      call.write(finalTranscription);
    } else {
      let serverResponse = new messages.TextResponse();
      serverResponse.setTextResponse(transcription);
      call.write(serverResponse);
    }
  });

  recognizeStream.on("error", (err) => {
    if (err.code === 11) {
      console.log("Reached Audio Timeout");
      call.end();
    } else {
      console.log("Error received from Google API: " + err);
      console.log(err);
      call.end();
    }
  });

  recognizeStream.on("end", () => {
    call.end();
  });

  // On data received from client
  call.on("data", (data) => {
    //console.log(data.getAudioData());
    let bytes = data.getAudioData();
    rStream.push(bytes);
  });

  call.on("error", (err) => {
    console.log("Error in receiving data from client: \n " + err);
    console.log(err);
    if (err.code === 13) {
      console.log("Silence detected. Closing gRPC streaming");
      call.end();
    }
    //End the gRPC connection.
    call.end();
  });

  call.on("end", () => {
    recognizeStream.end();
  });
}

function main() {
  const server = new grpc.Server();
  const ADDRESS = "localhost:5000";
  const CREDS = grpc.ServerCredentials.createInsecure();

  server.addService(services.SttServiceService, {
    speechToTextLocal: STT,
  });

  server.bindAsync(ADDRESS, CREDS, (error, port) => {
    if (error) {
      console.log("Error starting the server \n" + error);
    } else {
      server.start();
      console.log(`Server is live on port: ${port}`);
    }
  });
}

main();
