var mqtt = require("mqtt");
var ip_port = "192.168.1.54:1883";
console.log("Waits for connecting to " + ip_port);
var mqtt_object = mqtt.connect("mqtt://".concat(ip_port));
mqtt_object.on("connect", function () {
  console.log("program has been connected to mosquitto broker");
});
// client.subscribe("test");
// server.publish("send", "GAY");
//climqtt_objectent.subscribe("test");

mqtt_object.on("message", function (topic, message) {
  //받았을 때
  console.log(message.toString() + ":" + topic);
});
