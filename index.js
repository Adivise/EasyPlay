const tmi = require("tmi.js");
const { Collection } = require("@discordjs/collection");
const config = require("./settings/config.js");
const { I18n } = require("locale-parser");
const { BanchoClient } = require("bancho.js");

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

process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));

const client = new tmi.client(options);

client.config = require("./settings/config.js");
client.owner = config.OWNER;
client.i18n = new I18n(config.LANGUAGE);

const bancho = new BanchoClient({ username: config.OSU_NAME, password: config.OSU_PASS });

client.bancho = bancho;

/// Load Twitch Package
["aliases", "commands"].forEach(x => client[x] = new Collection());
["loadCommands", "loadEvents", "loadBancho"].forEach(x => require(`./handlers/${x}`)(client));

/// Start Bancho Client
bancho.connect().then(() => {
  console.log("[INFO] Connected to Bancho!");
});

/// Start Twitch Client
client.connect().then(() => {
  console.log("[INFO] Connected to Twitch!");
});