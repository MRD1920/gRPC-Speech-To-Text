// source: speechToText.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.speechtotextPackage.SpeechRequest', null, global);
goog.exportSymbol('proto.speechtotextPackage.TextResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechtotextPackage.SpeechRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechtotextPackage.SpeechRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechtotextPackage.SpeechRequest.displayName = 'proto.speechtotextPackage.SpeechRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.speechtotextPackage.TextResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.speechtotextPackage.TextResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.speechtotextPackage.TextResponse.displayName = 'proto.speechtotextPackage.TextResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechtotextPackage.SpeechRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.speechtotextPackage.SpeechRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechtotextPackage.SpeechRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechtotextPackage.SpeechRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    audioData: msg.getAudioData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechtotextPackage.SpeechRequest}
 */
proto.speechtotextPackage.SpeechRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechtotextPackage.SpeechRequest;
  return proto.speechtotextPackage.SpeechRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechtotextPackage.SpeechRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechtotextPackage.SpeechRequest}
 */
proto.speechtotextPackage.SpeechRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAudioData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechtotextPackage.SpeechRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechtotextPackage.SpeechRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechtotextPackage.SpeechRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechtotextPackage.SpeechRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes audio_data = 1;
 * @return {string}
 */
proto.speechtotextPackage.SpeechRequest.prototype.getAudioData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes audio_data = 1;
 * This is a type-conversion wrapper around `getAudioData()`
 * @return {string}
 */
proto.speechtotextPackage.SpeechRequest.prototype.getAudioData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAudioData()));
};


/**
 * optional bytes audio_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAudioData()`
 * @return {!Uint8Array}
 */
proto.speechtotextPackage.SpeechRequest.prototype.getAudioData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAudioData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.speechtotextPackage.SpeechRequest} returns this
 */
proto.speechtotextPackage.SpeechRequest.prototype.setAudioData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.speechtotextPackage.TextResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.speechtotextPackage.TextResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.speechtotextPackage.TextResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechtotextPackage.TextResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    textResponse: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isFinal: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.speechtotextPackage.TextResponse}
 */
proto.speechtotextPackage.TextResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.speechtotextPackage.TextResponse;
  return proto.speechtotextPackage.TextResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.speechtotextPackage.TextResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.speechtotextPackage.TextResponse}
 */
proto.speechtotextPackage.TextResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextResponse(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFinal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.speechtotextPackage.TextResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.speechtotextPackage.TextResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.speechtotextPackage.TextResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.speechtotextPackage.TextResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsFinal();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string text_response = 1;
 * @return {string}
 */
proto.speechtotextPackage.TextResponse.prototype.getTextResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.speechtotextPackage.TextResponse} returns this
 */
proto.speechtotextPackage.TextResponse.prototype.setTextResponse = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_final = 2;
 * @return {boolean}
 */
proto.speechtotextPackage.TextResponse.prototype.getIsFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.speechtotextPackage.TextResponse} returns this
 */
proto.speechtotextPackage.TextResponse.prototype.setIsFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.speechtotextPackage);
