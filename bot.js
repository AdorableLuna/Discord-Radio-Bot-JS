const fs = require('fs');
const Discord = require("discord.js")
const ConfigFile = require("./config");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on("ready", () => {

  console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", message => {

  if (!message.content.startsWith(ConfigFile.prefix) || message.author.bot) return;

  const args = message.content.slice(ConfigFile.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) {
    message.channel.send(`Could not recognise \`${command}\` as a known command.`);
  };

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
	}
})

client.login(ConfigFile.token);
