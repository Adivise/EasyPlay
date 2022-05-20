const { PREFIX } = require("../../settings/config.js");

module.exports = async (client, channel, tags, message, self) => { 
    if (self) return;
    if (!message.startsWith(PREFIX)) return;

    const args = message.slice(PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

    const language = "en"

    if(!command) return;
   
    try {
        if (command.ownerOnly) {
            if (tags.username !== client.owner) {
                return client.say(channel, `${tags.username}, You are not my owner!`);
            }
        }
        command.run(client, channel, tags, args, language);
    } catch (error) {
        console.log(error);
        return client.say(channel, `Something went wrong!`);
    }
}