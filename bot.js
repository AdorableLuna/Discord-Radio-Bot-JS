const Discord = require("discord.js")
const ConfigFile = require("./config");

const client = new Discord.Client();

client.on("ready", () => {

  console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {

  if (msg.author.bot) { return; }

  if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }
})

client.login(ConfigFile.token)
