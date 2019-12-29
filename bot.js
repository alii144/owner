const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("655500598573006928")
setInterval(function() {
channel.send(`هلا هلا هلا هلا هلا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
