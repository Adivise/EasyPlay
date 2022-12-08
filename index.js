const tmi = require("tmi.js");
const fetch = require("node-fetch");

process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));

const client = new tmi.client(require("./config.json").twitch);

client.connect().then(() => {
  console.log("[INFO] Connected to Twitch!");

  client.on("message", async (channel, tags, message, self) => {
      const prefix = "!"
      if (!message.startsWith(prefix)) return;
      const args = message.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command == "np" || command == "nowplaying") {
        const response = await fetch(`http://127.0.0.1:24050/playing`).then(res => res.json());
        client.say(channel, `@${tags.username}, Beatmap: https://osu.ppy.sh/beatmapsets/${response.menu.bm.set}#/${response.menu.bm.id} | Mods: ${response.menu.mods.str}`);
      } else if (command == "skin") {
        const response = await fetch(`http://127.0.0.1:24050/playing`).then(res => res.json());
        client.say(channel, `@${tags.username}, Skin: ${response.settings.folders.skin}`);
      }
  });
});