require("dotenv").config();
const tmi = require("tmi.js");
const fetch = require("node-fetch"); //<== web api wrapper

let opts = {
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_BOT_OAUTH_PASSWORD,
  },
  channels: [process.env.TWITCH_TARGET_CHANNEL],
};

console.log(`[${getNow()}] Starting bot...`);

const client = new tmi.client(opts);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.on("disconnected", onDisconnectedHandler);

client.connect();

async function onMessageHandler(target, context, msg, self) {

  if (self) { return; }
  const commandName = msg.trim();
  if (commandName === '!np') { //<== this command you can't change

    const { menu } = await fetch(`http://localhost:24050/json`).then(response => response.json()); //<== requirement gosumemory to working!
    const title = menu.bm.metadata.title; // this all api wrapper
    const ar = menu.bm.stats.AR;
    const cs = menu.bm.stats.CS;
    const od = menu.bm.stats.OD;
    const hp = menu.bm.stats.HP;
    const star = menu.bm.stats.SR;
    const bpm = menu.bm.stats.BPM.max;
    const link = menu.bm.set;
    const mods = menu.mods.str;

    client.say(target, 
      `${process.env.TITLE} ${title} ${process.env.MODS} ${mods} | ${star} ${process.env.STAR} ${process.env.AR} ${ar} ${process.env.CS} ${cs} ${process.env.OD} ${od} ${process.env.HP} ${hp} ${process.env.BPM} ${bpm} ${process.env.DL} (https://osu.ppy.sh/beatmapsets/${link})` //<=== you can use // to disabled and use the buttom
      //`⏯ TITLE: ${title} 🎮 MODS: ${mods} | ${star} ⭐ | 🔩 AR: ${ar} CS: ${cs} OD: ${od} HP: ${hp} BPM: ${bpm} | 🔗 DL: (https://osu.ppy.sh/beatmapsets/${link})`
      );
    console.log(`+ ${target} use ${commandName} command`);
}

  if (commandName === '!skin') {//<== this command you can't change

    const { settings } = await fetch(`http://localhost:24050/json`).then(response => response.json()); //<== requirement gosumemory to working!
    const skin = settings.folders.skin;

    client.say(target, 
      `${process.env.SKIN} ${skin}` //<=== you can use // to disabled and use the buttom
      //`🎲 CURRENT USE SKIN: ${skin}`
      );

    console.log(`+ ${target} use ${commandName} command`);
  }
}

function onConnectedHandler(addr, port) {
  console.log(`+ Connected to ${addr}:${port}`);
}

function onDisconnectedHandler(reason) {
  console.log(`- Disconnected: ${reason}`);
  process.exit(1);
}

function getNow() {
  return new Date().toISOString().replace(/T/, " ").replace(/\..+/, "");
}

