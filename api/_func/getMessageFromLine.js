const LineClient = require("./lineClient");
const firebase = require("../firebase");

const addMemberToRoom = require("./addMemberToRoom");

const db = firebase.database();
module.exports = async fromHook => {
  const nowEvent = fromHook.events[0];
  if (fromHook.events[0].source.type == "group") {
    // ม่อน successfully join group
    if (nowEvent.message.type == "text") {
      if (nowEvent.message.text == "ม่อน") {
        // someone summon ม่อน
        return LineClient.replyMessage(nowEvent.replyToken, {
          type: "text",
          text: "เล่นป่าว (ถ้าจะเล่นให้พิมพ์ เริ่มเล่นม่อน)"
        });
      } else if (nowEvent.message.text == "เริ่มเล่นม่อน") {
        // someone start calling ม่อน
        return LineClient.replyMessage(nowEvent.replyToken, {
          type: "text",
          text: "จัดให้! ใครเล่นบ้าง (ใครจะเล่น พิมพ์ กูเล่นม่อนด้วย)"
        });
      } else if (nowEvent.message.text == "กูเล่นม่อนด้วย") {
        // someone wanna add theirself to ม่อน room
        const member = await addMemberToRoom(nowEvent);
        return LineClient.replyMessage(nowEvent.replyToken, {
          type: "text",
          text:
            "ยินดีต้อนรับนักแดกน้ำ ตอนนี้มี" +
            member.join(", ") +
            " (ถ้าครบแล้วพิมพ์ เริ่มเล่นเลย)"
        });
      } else if (nowEvent.message.text == "เริ่มเล่นเลย") {
        // game startoooooooo
        addMemberToRoom(nowEvent);
        return LineClient.replyMessage(nowEvent.replyToken, {
          type: "text",
          text: "เคคคค"
        });
      }
    }
  }
};
