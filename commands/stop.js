const ConfigFile = require("../config");

module.exports = {
	name: 'stop',
	description: 'Stop a stream.',
	execute(message, args) {
		if (!message.member.voiceChannel) {
			message.channel.send("You are currently not connected to any voice channels.");
			return;
		}

		if (message.member.voiceChannel != null) {
			const bot = message.member.voiceChannel.members.find(user => user.id == ConfigFile.clientId);

			if (!bot) {
				message.channel.send(`I am currently not connected to ${message.member.voiceChannel.name} voice channel.`);
				return;
			}
		}

    message.member.voiceChannel.leave();
	},
};
