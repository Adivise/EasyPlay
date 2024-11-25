<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=EasyPlay&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient"/> </a> 
</p>

<p align="center"> 
  <a href="https://discord.gg/SNG3dh3MbR" target="_blank"> <img src="https://discordapp.com/api/guilds/903043706410643496/widget.png?style=banner2"/> </a> 
</p>

<p align="center"> 
  <a href="https://ko-fi.com/nanotect" target="_blank"> <img src="https://ko-fi.com/img/githubbutton_sm.svg"/> </a> 
</p>

## 📑 Feature
- [x] Get Nowplaying
- [x] Lightweight
- [x] Easy to use!

## 📎 Requirements

- [x] Node.js **[Download](https://nodejs.org/en/download/)**
- [x] TMI Oauth **[Click Here](https://twitchapps.com/tmi/)**

## 📚 Installation

```
git clone https://github.com/Adivise/EasyPlay
cd EasyPlay
npm install
```

After installation finishes you can use `node .` to start the bot.

# ‼️ Must Read 
Don't forget to run `memory/https.exe` to bot work

**Q:** *What is https.exe file?*

**A:** *It just a same from official build, but i remove some useless code not use in my bot*

If your scare of my **exe** file you can use
from official build here: **[gosumemory](https://github.com/l3lackShark/gosumemory/releases)**
**dont forget to change ip + port and socket to matching same office build**

Here is official ip:
```.json
"host": "127.0.0.1",
"port": "24050",
"socket": "json"
```

## 📄 Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:
```.json
{
    "apiKey": "YOUR_API_KEY",
    "twitch": {
        "connection": {
            "reconnect": true,
            "secure": true
        },
        "identity": {
            "username": "Nanotect_",
            "password": "YOUR_TMI_OAUTH"  
        },
        "channels": ["nanotect_"]
    },
    "host": "127.0.0.1",
    "port": "24050",
    "socket": "playing"
}
```

## ❣ Contributors

<a href="https://github.com/Adivise/SpaceTime/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=Adivise/SpacePlay" />
</a>
