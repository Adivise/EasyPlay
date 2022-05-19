const { readdirSync } = require("fs")

module.exports = async (twitch, message) => {
    const load = dirs => {    
        const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
                const evt = require(`../events/${dirs}/${file}`);
                let eName = file.split('.')[0];
                twitch.on(eName, evt.bind(null, twitch));
            }
        };
        ['client'].forEach(x => load(x));
        console.log(`[INFO] Loading twitch events`);
};