// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var speechToText_pb = require('./speechToText_pb.js');

function serialize_speechtotextPackage_SpeechRequest(arg) {
  if (!(arg instanceof speechToText_pb.SpeechRequest)) {
    throw new Error('Expected argument of type speechtotextPackage.SpeechRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechtotextPackage_SpeechRequest(buffer_arg) {
  return speechToText_pb.SpeechRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_speechtotextPackage_TextResponse(arg) {
  if (!(arg instanceof speechToText_pb.TextResponse)) {
    throw new Error('Expected argument of type speechtotextPackage.TextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_speechtotextPackage_TextResponse(buffer_arg) {
  return speechToText_pb.TextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SttServiceService = exports.SttServiceService = {
  speechToTextLocal: {
    path: '/speechtotextPackage.SttService/SpeechToTextLocal',
    requestStream: true,
    responseStream: true,
    requestType: speechToText_pb.SpeechRequest,
    responseType: speechToText_pb.TextResponse,
    requestSerialize: serialize_speechtotextPackage_SpeechRequest,
    requestDeserialize: deserialize_speechtotextPackage_SpeechRequest,
    responseSerialize: serialize_speechtotextPackage_TextResponse,
    responseDeserialize: deserialize_speechtotextPackage_TextResponse,
  },
};

exports.SttServiceClient = grpc.makeGenericClientConstructor(SttServiceService);
