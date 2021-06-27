var mqtt = require("mqtt");
console.log("Hello Gay");
var server = mqtt.connect("mqtt://192.168.1.54:1883");
var fs = require("fs");

server.on("connect", function () {
  console.log("sub on");
    console.log("asd")
    server.publish("send", "GAY");
});

server.on("message", function (topic, message) {
  console.log(topic + " : send");
  server.end();
});
