const fetch = require("node-fetch");

module.exports = {
    ownerOnly: false,
    config: {
        name: "skin",
        aliases: ["currentskin"],
    }, 
    run: async (twitch, channel, tags, args) => {
        const { settings } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement run gosumemory to working!
        const skin = settings.folders.skin;
    
        twitch.say(channel, twitch.i18n.get("en", "nowplaying", "skin_msg", {
            skin: skin,
        }));
    }
}