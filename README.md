# Discord Radio Bot

A radio bot for Discord written in Javascript. Work in progress.

## Getting Started

Clone the repository to a directory of your choosing. After cloning, duplicate the `config.json.example` file and rename it to `config.json`.
Open the `config.json` and change the token value from `your-token-goes-here` to your Discord bot's token.

### Installing

Firsty, install the Windows install build tools required to install node-opus.

`npm install -g node-gyp`

`npm install --global --production windows-build-tools`

If the above is installed, you can now install Discord.js with voice support.

`npm install discord.js node-opus`

To allow the bot to join voice channel you need to install FFmpeg.

`npm install ffmpeg-binaries`

### Usage

Open a command prompt and relocate to your project folder and run the following command: `node bot.js`.
To stop the bot, press CTRL-C.
