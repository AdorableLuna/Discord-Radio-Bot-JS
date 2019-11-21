const play = require('./play');

module.exports = {
	name: 'pause',
	description: 'Pauses an active stream.',
	execute(message, args) {
    const StreamDispatcher = play.getStreamDispatcher();

    if(StreamDispatcher == null || StreamDispatcher.destroyed) {
      message.channel.send("I am currently not playing any radio streams.");
      return;
    }

    if(StreamDispatcher.paused) {
      message.channel.send(`The stream is already paused. Type \`/resume\` to resume the stream.`);
      return;
    }

    StreamDispatcher.pause();
    message.channel.send(`Stream has been paused. Type \`/resume\` to resume the stream.`);
    console.log("Paused the stream.");
	},
};
