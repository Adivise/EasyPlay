module.exports = {
    ownerOnly: false,
    config: {
        name: "request",
        aliases: ["rq"],
    }, 
    run: async (twitch, channel, tags, args) => {
        const { BanchoClient } = require("bancho.js");
        const client = new BanchoClient({ username: twitch.config.OSU_NAME, password: twitch.config.OSU_PASS });

        const url = args[0]; // 
        if (!url) return twitch.say(channel, `@${tags.username}, Please provide a beatmap to request!`);
        if (!url.includes("https://osu.ppy.sh/beatmapsets/")) return twitch.say(channel, `@${tags.username}, Please provide a beatmap link!`);

        /// Await for the client to connect to the server
        await client.connect().then(() => {
          //  console.log("Connected to Bancho!");
            const user = client.getSelf();
            user.sendMessage(`Song: ${url} | Requested By: ${tags.username}`);
        }).catch(console.error);
    }
}