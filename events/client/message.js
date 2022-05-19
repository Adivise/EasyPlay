const { PREFIX } = require("../../settings/config.js");

module.exports = async (twitch, channel, tags, message, self) => { 
    if (self) return;
    if (!message.startsWith(PREFIX)) return;

    const args = message.slice(PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const command = twitch.commands.get(cmd) || twitch.commands.get(twitch.aliases.get(cmd));

    if(!command) return;
   
    try {
        if (command.ownerOnly) {
            if (tags.username !== twitch.owner) {
                return twitch.say(channel, `${tags.username}, You are not my owner!`);
            }
        }
        command.run(twitch, channel, tags, args);
    } catch (error) {
        console.log(error);
        return twitch.say(channel, `Something went wrong!`);
    }
}