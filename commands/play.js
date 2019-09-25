module.exports = {
	name: 'play',
	description: 'Stream from a chosen radio.',
	execute(message, args) {
    if (!message.member.voiceChannel) {
      message.channel.send("You are currently not in a voice channel. Join a voice channel and try again.")
      return;
    }

    message.member.voiceChannel.join().then(connection => {
      console.log(`Connected to ${connection.channel.name} voice channel.`);

      connection.playArbitraryInput('http://stream.radiocorp.nl/web14_mp3', {volume: .05});
    })
    .catch(console.log);
	},
};
