const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error");

module.exports = {
  name: "resume",
  aliases: ['res'],

  run: async(client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed Music!")
      .setColor("PURPLE")
      return message.channel.send(xd);
    }
    return sendError("<:xmark:848019597907329085> **Im Not Playing Anything In This Server.**", message.channel);
  },
};