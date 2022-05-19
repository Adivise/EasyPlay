const { readdirSync } = require("fs");

module.exports = async (twitch) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
                let pull = require(`../commands/${dirs}/${file}`);
                twitch.commands.set(pull.config.name, pull);
                if (pull.config.aliases) pull.config.aliases.forEach(a => twitch.aliases.set(a, pull.config.name));
            };
        };
        ["general"].forEach(x => load(x));
        console.log(`[INFO] Loading twitch commands`);
};