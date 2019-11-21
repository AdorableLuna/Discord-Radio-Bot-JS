const play = require('./play');

module.exports = {
	name: 'resume',
	description: 'Resumes a paused stream.',
	execute(message, args) {
    const StreamDispatcher = play.getStreamDispatcher();

    if(StreamDispatcher == null || StreamDispatcher.destroyed) {
      message.channel.send("I am currently not playing any radio streams.");
      return;
    }

    if(!StreamDispatcher.paused) {
      message.channel.send("The stream is not paused.");
      return;
    }

    StreamDispatcher.resume();
    message.channel.send("Stream has been resumed.");
    console.log("Resumed the stream.");
	},
};
