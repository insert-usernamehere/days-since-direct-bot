const Discord = require("discord.js");
const moment = require("moment");
const bot = new Discord.Client();

const token = "bot id";
const days = moment("20190912", "YYYYMMDD").fromNow();

bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", async msg => {
  if (msg.content === "days since direct") {
    msg.reply(days);
  }
});
bot.login(token);
