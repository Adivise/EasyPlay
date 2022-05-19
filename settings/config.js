require("dotenv").config();
const { resolve } = require("path");

module.exports = {
    /// Setting For Bot
    PREFIX: process.env.PREFIX || "!", // the prefix for your bot
    LANGUAGE: {
        defaultLocale: "en", // "en" = default language
        directory: resolve("languages"), // <= location of language
    },
    
    /// Setting For Twitch
    CHANNEL: process.env.CHANNEL || ["nanotect_"], // the channel you want to join
    USERNAME: process.env.USERNAME || "YOUR_USERNAME", // the username of your bot
    OAUTH: process.env.OAUTH || "YOUR_OAUTH", // the oauth of your bot
    OWNER: process.env.OWNER || "nanotect_", // the owner of your bot

    /// Setting For Osu! (API)
    OSU_NAME: process.env.OSU_NAME || "YOUR_OSU_NAME", // the osu! username
    OSU_PASS: process.env.OSU_PASS || "YOUR_IRC_PASSWORD", // the osu! password can get from here: https://osu.ppy.sh/p/irc
}