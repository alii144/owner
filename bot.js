const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By snow_ghost");


client.on("ready", () => {
let channel =     client.channels.get("668535828653408271")
setInterval(function() {
channel.send(`هلا هلا هلا هلا هلا`);
}, 60)
})

client.login(process.env.BOT_TOKEN);
