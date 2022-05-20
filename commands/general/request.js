module.exports = {
    ownerOnly: false,
    config: {
        name: "request",
        aliases: ["rq"],
    }, 
    run: async (client, channel, tags, args, language) => {
        const url = args[0]; // 
        if (!url) return client.say(channel, `@${tags.username}, Please provide a beatmap to request!`);
        if (!url.includes("https://osu.ppy.sh/beatmapsets/")) return client.say(channel, `@${tags.username}, Please provide a beatmap link!`);

        /// Send Message TO BANCHO SERVER
        await client.SendMessage(language, tags.username, url);
    }
}