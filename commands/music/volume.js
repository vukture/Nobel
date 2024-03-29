const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "volume",
  aliases: ['vol'],

  run: async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("<:xmark:848019597907329085> **I'm Sorry But You Need To Be In A Voice Channel To Set My Volume!**", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("<:xmark:848019597907329085> **There Is Nothing Playing.**", message.channel);
    if (!serverQueue.connection) return sendError("<:xmark:848019597907329085> **There Is Nothing Playing.**", message.channel);
    if (!args[0])return message.channel.send(`**The Current Volume Is:** **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send('<:xmark:848019597907329085> **Numbers only!**').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('<:xmark:848019597907329085> **You Can\'t Set The Volume More Than 100 Or Lower Than 0**',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`<:volume:843037832658550805> **I Have Set The Volume To:** **\`${args[0]/1}/100\`**`)
    .setColor("PURPLE")
    return message.channel.send(xd);
  },
};