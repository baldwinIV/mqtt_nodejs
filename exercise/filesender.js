var mqtt = require("mqtt");
var server = mqtt.connect("mqtt://192.168.1.54:1883");
var fs = require("fs");
var a = 1;
var tosend = new Object();
tosend.data = a;
var jsonData = JSON.stringify(tosend);
server.on("connect", function () {
  console.log("sub on");
  server.publish("send", jsonData);
  var myTimer = setInterval(function () {
    var jsonData = JSON.stringify(tosend);
    server.publish("send", jsonData);
    console.log(tosend);
    tosend.data = a;
    a++;
  }, 1);

  //clearInterval(myTimer);
});

server.on("message", function (topic, message) {
  console.log(topic + " : send");
  server.end();
});
