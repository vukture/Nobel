const fs = require('fs');
const Discord = require('discord.js');
const sendError = require("../../util/error");
const jsonlick = require("../../assets/json/roleplay.json")

module.exports = {
    name: "lick",
    aliases: [" "],
    run: async(client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!args[0]) return sendError(`<:xmark:848019597907329085> **Try run again the command but next time please specify a user!**` , message.channel);
        if(user.id === message.author.id) return sendError(`<:xmark:848019597907329085> **Why are you licking yourself?**` , message.channel);
       
         const lickArray = (jsonlick).lick;
      
         const randomlick =
           lickArray[Math.floor(Math.random() * lickArray.length)];

        const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** Is Licking **${user}** , Kinky!`)
       .setImage(`${randomlick}`)
      message.channel.send(embed)
    }
 }