const Discord = require("discord.js");
const StationFile = require("../stations/stations");

module.exports = {
	name: 'stations',
	description: 'Lists all available radio stations',
	execute(message, args) {
    let stations = '';

    StationFile.stations.forEach(function(station) {
      stations = stations.concat(`\`${station.id}\` - ${station.name}\n`);
    });

    const stationsEmbed = new Discord.RichEmbed()
        .setColor('#eb7134')
        .setTitle('All available radio stations')
        .setDescription(stations);

    message.channel.send(stationsEmbed);
	},
};
