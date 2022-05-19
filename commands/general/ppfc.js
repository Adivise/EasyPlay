const fetch = require("node-fetch");

module.exports = {
    ownerOnly: false,
    config: {
        name: "ppfc",
        aliases: ["performancefullcombo"],
    }, 
    run: async (twitch, channel, tags, args) => {
        const { menu } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement run gosumemory to working!
        const ppfc = menu.pp['100'];
        const nightynight = menu.pp['99'];
        const nightyeight = menu.pp['98'];
        const nightyseven = menu.pp['97'];
        const nightysix = menu.pp['96'];
        const nightyfive = menu.pp['95'];

        twitch.say(channel, twitch.i18n.get("en", "nowplaying", "ppfc_msg", {
            ppfc: ppfc,
            nightynight: nightynight,
            nightyeight: nightyeight,
            nightyseven: nightyseven,
            nightysix: nightysix,
            nightyfive: nightyfive,
        }));
    }
}