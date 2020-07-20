const Discord = require("discord.js");
const moment = require("moment");
const bot = new Discord.Client();

const token = "bot id";

bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", async msg => {
  if (msg.content === "days since direct") {
    msg.reply("its been 365 days since last direct");
  }
	
  moment("20190912", "YYYYMMDD").fromNow()
  
  bot.on("message", async msg => {
    if (msg.content === "days since direct") {
      msg.reply("its been 365 days since last direct");
  }
);
bot.login(token);
