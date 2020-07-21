const Discord = require("discord.js");
const moment = require("moment");
const bot = new Discord.Client();

const token = "bot id";
const directdays = moment("20190904", "YYYYMMDD").fromNow();
const directminidays = moment("20200720", "YYYYMMDD").fromNow();

bot.on("ready", () => {
  console.log("bot is working now whens the next direct");
});

bot.on("message", async msg => {
  if (msg.content === "days since direct") {
    msg.channel.send(directdays);
  }
});
  bot.on("message", async msg => {
    if (msg.content === "days since mini direct") {
      msg.channel.send(directminidays);
    }
  });
  bot.login(token);

