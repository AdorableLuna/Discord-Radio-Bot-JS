module.exports = {
	name: 'stop',
	description: 'Stop a stream.',
	execute(message, args) {
		if (!message.member.voiceChannel) {
			message.channel.send("I am currently not connected to any voice channels.");
			return;
		}
		
    message.member.voiceChannel.leave();
	},
};
