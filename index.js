const tmi = require("tmi.js");
const { Collection } = require("@discordjs/collection");
const config = require("./settings/config.js");
const { I18n } = require("locale-parser");

let options = {
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: config.USERNAME,
    password: config.OAUTH,
  },
  channels: [config.CHANNEL],
};

console.log(`[INFO] Connecting to Twitch`);

process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));

const twitch = new tmi.client(options);

twitch.config = require("./settings/config.js");
twitch.owner = config.OWNER;
twitch.i18n = new I18n(twitch.config.LANGUAGE);

["aliases", "commands"].forEach(x => twitch[x] = new Collection());
["loadCommands", "loadEvents"].forEach(x => require(`./handlers/${x}`)(twitch));

twitch.connect();