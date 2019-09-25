module.exports = {
	name: 'stop',
	description: 'Stop a stream.',
	execute(message, args) {
    message.member.voiceChannel.leave();
	},
};
