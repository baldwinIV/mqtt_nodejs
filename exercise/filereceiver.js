var mqtt = require("mqtt");
console.log("Hello Gay");
var client = mqtt.connect("mqtt://192.168.1.54:1883");
var fs = require("fs");

client.on("connect", function () {
  client.subscribe("test");
  console.log("sub on");
});

client.on("message", function (topic, message) {
  console.log(message.toString() + topic);
  console.log("messgae on");
});
