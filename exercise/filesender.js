var mqtt = require("mqtt");
var server = mqtt.connect("ws://test.mosquitto.org:8080");
//연결하고 싶은 mqtt브로커 주소입니다. 
var tosend = {
  main: {
    Hour1: 1.0,
    Hour2: 2.0,
    Hour3: 3.0,
    Hour4: 4.0,
    Hour5: 5.0,
    Hour6: 6.0,
    Hour7: 7.0,
    Hour8: 8.0,
    Hour9: 9.0,
    Hour10: 10.0,
    Hour11: 11.0,
    Hour12: 12.0,
  },
  possible: 1,
  type: "temp",
};
var parameter = 0;
//tosend는 보내고 싶은 객체입니다. 
var jsonData = JSON.stringify(tosend);
server.on("connect", function () {
  console.log("sub on");
  server.publish("send", jsonData);
  var myTimer = setInterval(function () {
    var jsonData = JSON.stringify(tosend);
    tosend.main.Hour1 += parameter;
    parameter *= -1;
    server.publish("24hours_data_answer",jsonData);
    //1패러미터의 topic으로 tosend를 문자열화 한 jsonData를 pub합니다.
    console.log(jsonData);
  }, 1000);
  //1000은 1초입니다. 설정한 파라미터만큼 인터벌을 두고 퍼블리시합니다.

  //clearInterval(myTimer);
});

server.on("message", function (topic, message) {
  console.log(topic + " : send");
  server.end();
});
