# gRPC Audio Transcription

This project utilizes gRPC (Google Remote Procedure Call) to implement a bi-directional streaming API for real-time audio transcription. The system captures audio input from a microphone on the client side, streams it to the server, which then interacts with Google Cloud Speech-to-Text services to transcribe the audio, and finally sends back the transcription to the client in real-time.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A `google-OAuth.json` file containing the necessary credentials for Google Cloud Speech-to-Text service.

## Installation

1. Clone this repository to your local machine.
2. Place your `google-OAuth.json` file in the root directory of the project.

## Usage

### Starting the Server

```bash
$ node server/index.js
```

### Starting the Client

```bash
$ node client/client.js
```

**Note:** Ensure you run the server first before starting the client to avoid errors.

## Dependencies

- [@google-cloud/speech](https://www.npmjs.com/package/@google-cloud/speech) (^6.1.0)
- [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) (^1.9.13)
- [google-protobuf](https://www.npmjs.com/package/google-protobuf) (^3.21.2)
- [mic](https://www.npmjs.com/package/mic) (^2.1.2)
- [node-microphone](https://www.npmjs.com/package/node-microphone) (^0.1.6)
- [node-record-lpcm16](https://www.npmjs.com/package/node-record-lpcm16) (^1.0.1)

## Development Dependencies

- [grpc-tools](https://www.npmjs.com/package/grpc-tools) (1.11)
- [nodemon](https://www.npmjs.com/package/nodemon) (^3.0.2)

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues if you encounter any problems.
