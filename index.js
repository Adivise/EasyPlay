const tmi = require("tmi.js");
const fetch = require("node-fetch");
const { USERNAME, OAUTH, CHANNEL, PREFIX } = require("./config.json");
const string = require("./languages/en.json")

let opts = {
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: USERNAME,
    password: OAUTH,
  },
    channels: [CHANNEL],
};

console.log(`Starting bot...`);

const client = new tmi.client(opts);

client.on("message", onMessageHandler);

client.connect();

async function onMessageHandler(target, context, msg, self) {

  if (self) { return; }
  const commandName = msg.trim();
  if (commandName === `${PREFIX}np`) { //<== this command you can't change

    const { menu } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement gosumemory to working!
    const title = menu.bm.metadata.title; // this all api wrapper
    const ar = menu.bm.stats.AR;
    const cs = menu.bm.stats.CS;
    const od = menu.bm.stats.OD;
    const hp = menu.bm.stats.HP;
    const star = menu.bm.stats.SR;
    const bpm = menu.bm.stats.BPM.max;
    const link = menu.bm.set;
    const mods = menu.mods.str;
    const rarity = menu.bm.id;

    client.say(target, string.BEATMAP
      .replace("{title}", title)
      .replace("{ar}", ar)
      .replace("{cs}", cs)
      .replace("{od}", od)
      .replace("{hp}", hp)
      .replace("{star}", star)
      .replace("{bpm}", bpm)
      .replace("{link}", link)
      .replace("{mods}", mods)
      .replace("{rarity}", rarity)
    );

    console.log(`+ ${target} use ${commandName} command`);
}

  if (commandName === `${PREFIX}skin`) {//<== this command you can't change

    const { settings } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement run gosumemory to working!
    const skin = settings.folders.skin;

    client.say(target, string.SKIN
      .replace("{skin}", skin)
    );

    console.log(`+ ${target} use ${commandName} command`);
}
  
  if (commandName === `${PREFIX}ppfc`) {//<== this command you can't change

    const { menu } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement run gosumemory to working!
    const ppfc = menu.pp['100'];
    const nightynight = menu.pp['99'];
    const nightyeight = menu.pp['98'];
    const nightyseven = menu.pp['97'];
    const nightysix = menu.pp['96'];
    const nightyfive = menu.pp['95'];

    client.say(target, string.PERFORMANCE
      .replace("{ppfc}", ppfc)
      .replace("{nightynight}", nightynight)
      .replace("{nightyeight}", nightyeight)
      .replace("{nightyseven}", nightyseven)
      .replace("{nightysix}", nightysix)
      .replace("{nightyfive}", nightyfive)
    );

    console.log(`+ ${target} use ${commandName} command`);
  }
}