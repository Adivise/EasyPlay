const fetch = require("node-fetch");

module.exports = {
    ownerOnly: false,
    config: {
        name: "ppfc",
        aliases: ["performancefullcombo"],
    }, 
    run: async (client, channel, tags, args, language) => {      
        const { menu } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement run gosumemory to working!
        const ppfc = menu.pp['100'];
        const nightynight = menu.pp['99'];
        const nightyeight = menu.pp['98'];
        const nightyseven = menu.pp['97'];
        const nightysix = menu.pp['96'];
        const nightyfive = menu.pp['95'];

        client.say(channel, client.i18n.get(language, "ppfc", "message", {
            ppfc: ppfc,
            nightynight: nightynight,
            nightyeight: nightyeight,
            nightyseven: nightyseven,
            nightysix: nightysix,
            nightyfive: nightyfive,
        }));
    }
}