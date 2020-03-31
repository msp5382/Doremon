const firebase = require("firebase");
const config = {
  apiKey: "AIzaSyD8rZjgWeEZB3olqVdWKyq4Y23qa-Fk7Vk",
  authDomain: "doremon-water-feeder.firebaseapp.com",
  databaseURL: "https://doremon-water-feeder.firebaseio.com",
  projectId: "doremon-water-feeder",
  storageBucket: "doremon-water-feeder.appspot.com",
  messagingSenderId: "619209162883",
  appId: "1:619209162883:web:36276fbb5d6701b696dbb6"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
module.exports = firebase;
