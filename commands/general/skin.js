const fetch = require("node-fetch");

module.exports = {
    ownerOnly: false,
    config: {
        name: "skin",
        aliases: ["currentskin"],
    }, 
    run: async (client, channel, tags, args, language) => {
        const { settings } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement run gosumemory to working!
        const skin = settings.folders.skin;
    
        client.say(channel, client.i18n.get(language, "skin", "message", {
            skin: skin,
        }));
    }
}