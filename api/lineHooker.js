const firebase = require("./firebase");
const Processor = require("./_func/getMessageFromLine");
module.exports = async (req, res) => {
  console.log(req.body);
  await firebase
    .database()
    .ref("/")
    .push({
      gotFromLine: req.body
    });
  await Processor(req.body);
  res.send({});
};
