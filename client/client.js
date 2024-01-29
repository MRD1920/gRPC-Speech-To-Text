const recorder = require("node-record-lpcm16");
const messages = require("../speechToText/proto/speechToText_pb.js");
const services = require("../speechToText/proto/speechToText_grpc_pb.js");
const grpc = require("@grpc/grpc-js");

const recording = recorder
  .record({
    sampleRate: 16000,
    channels: 1,
    audioType: "raw",
  })
  .stream();

let client = new services.SttServiceClient(
  "Localhost:5000",
  grpc.ChannelCredentials.createInsecure()
);
// Old way of request and call
//const request = new messages.SpeechRequest();
//let call = client.speechToTextLocal(request, () => {});

//New way of call
let call = client.speechToTextLocal();

recording.on("data", (data) => {
  //console.log(`Recieved ${data.length} length of data`);
  //console.log(data);
  let request = new messages.SpeechRequest();
  request.setAudioData(data);
  call.write(request);
  //console.log(`${data.toString("base64")}`);
});

recording.on("end", () => {
  console.log("Streaming has come to an end");
});

call.on("data", (data) => {
  console.log("Transcripted text: " + data.getTextResponse() + "\n");
});

call.on("status", (status) => {
  console.log(status.details);
});

call.on("error", (error) => {
  console.log("Error received from server response: \n" + error);
});

call.on("end", () => {
  console.log("Streaming ended");
});
