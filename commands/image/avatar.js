const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "avatar",
    description: "Displays someone's avatar!",
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
        let embed = new MessageEmbed()
        .setTitle("Avatar")
        .setImage(avatar)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}