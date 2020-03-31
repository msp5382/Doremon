const LineClient = require("./lineClient");
const firebase = require("../firebase");

const db = firebase.database();
module.exports = async nowEvent => {
  const RoomPosition = "/rooms/" + nowEvent.source.groupId;
  const isRoomClosedRef = db.ref(RoomPosition + "/isClosed");
  const RoomMember = db.ref(RoomPosition + "/player");
  const isRoomClosed = await isRoomClosedRef.once("value").then();
  if (isRoomClosed.val() == true) {
    LineClient.replyMessage(nowEvent.replyToken, {
      type: "text",
      text: "เริ่มเกมแล้วเข้าไม่ได้นาจาาาาาาาา ไปนั่งแดกน้ำเงียบๆนะ"
    });
    return;
  }
  const profile = await LineClient.getGroupMemberProfile(
    nowEvent.source.groupId,
    nowEvent.source.userId
  );
  let snapshot = await RoomMember.once("value").then();
  if (snapshot.val() == null || snapshot.val() == undefined) {
    await RoomMember.push({
      name: profile.displayName
    });
    return [profile.displayName];
  } else {
    if (
      !Object.keys(snapshot.val())
        .map(k => snapshot.val()[k])
        .filter(player => player.name == profile.displayName).length > 0
    ) {
      await RoomMember.push({
        name: profile.displayName
      });

      return Object.keys(snapshot.val())
        .map(k => snapshot.val()[k])
        .push(profile.displayName);
    }
  }
};
