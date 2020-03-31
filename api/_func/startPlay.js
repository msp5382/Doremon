const LineClient = require("./lineClient");
const firebase = require("../firebase");

const db = firebase.database();
module.exports = async nowEvent => {
  const RoomPosition = "/rooms/" + nowEvent.source.groupId;
  const isRoomClosedRef = db.ref(RoomPosition + "/isClosed");
  const RoomMember = db.ref(RoomPosition + "/player");
  await isRoomClosedRef.set(true);
  LineClient.replyMessage(nowEvent.replyToken, {
    type: "text",
    text: "โอเค เริ่มได้!"
  });
};
