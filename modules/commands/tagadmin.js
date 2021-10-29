module.exports.config = {
  name: "tagadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "tagadmin",
  cooldowns: 1,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "none") {//id bot
    var aid = ["@Công Thành","100048760441123"];//id admin(s)
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["adm tắt thông báo mess rồi 🥲🤣","Tag gì z 🥺","đừng tag , ổng ngủ rồi ?!","tý ổng dậy ổng rep, tag cũng v à 🙂"];//(các) câu bot rep
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }