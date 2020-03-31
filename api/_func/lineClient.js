const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken:
    "KQiVEkixvC4hUa4KMFSb3OzRH0j8oyIr9obQgXQAzM3XzSH2vVJlAFhPIL7hlvjCbVxqlnV+fUYQly70fxqx1+rbyKSx7fKGX0T3QroP1tjMeJ0zNoIryELJ+PrH/R1FvyvFx5nKw/FGKM1dSnVYYAdB04t89/1O/w1cDnyilFU="
});

module.exports = client;
