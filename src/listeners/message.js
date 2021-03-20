const { Listener } = require("discord-akairo");

module.exports = class MessageListener extends Listener {
    constructor() {
        super("message", {
            emitter: "client",
            event: "message"
        });
    }

    exec(message) {
        this.client.messagesSeen++;

        let chan = message.channel;
        if (this.client.pokemonChannels.includes(chan.id) && !this.client.config.serverAdmins.includes(message.author.id) && !message.author.bot) {
            return setTimeout(async () => await message.delete(), 3000);
        } else return;
    }
}