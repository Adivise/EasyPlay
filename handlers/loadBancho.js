// const { BanchoClient } = require("bancho.js");
const { client } = require("tmi.js");

  /**
   *
   * @param {client} client
   */
module.exports = async (client) => {

    //// Send 
    client.SendMessage = async function (language, user, args) {
        client.bancho.getSelf().sendMessage(client.i18n.get(language, "request", "message", {
            user: user,
            args: args,
        }));
    };
}