module.exports = {
    name: "reverse",
    description: "Reverses the given text",
    run: async(client, message, args) => {
        const text = args.join(" ")
        if(!text) return message.reply("<:xmark:314349398824058880> Please give something to reverse!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.reply(result)
    }
}