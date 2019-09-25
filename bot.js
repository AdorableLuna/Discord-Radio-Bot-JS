const Discord = require("discord.js")
const ConfigFile = require("./config");

const client = new Discord.Client();

client.on("ready", () => {

  console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {

  if (msg.author.bot) { return; }

  if (msg.content.startsWith(ConfigFile.prefix)) { processCommand(msg); }
})

function processCommand(msg) {
  let fullCommand = msg.content.substr(1);
  let splitCommand = fullCommand.split(" ");

  let primaryCommand = splitCommand[0];
  let arguments = splitCommand.slice(1);

  if (primaryCommand == "play") {
    if (!msg.member.voiceChannel) {
      msg.channel.send("You are currently not in a voice channel. Join a voice channel and try again.")
      return;
    }

    msg.member.voiceChannel.join().then(connection => {
      console.log(`Connected to ${connection.channel.name} voice channel.`);

      connection.playArbitraryInput('http://stream.radiocorp.nl/web14_mp3', {volume: .05});
    })
    .catch(console.log);
  } else if (primaryCommand == "stop") {
    msg.member.voiceChannel.leave();
  } else {
    msg.channel.send(`Could not recognise \`${msg}\` as a known command.`);
  }
}

client.login(ConfigFile.token);
