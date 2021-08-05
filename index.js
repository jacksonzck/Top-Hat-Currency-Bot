const Discord = require('discord.js');
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');
dotenv.config();
const client = new Discord.Client();

client.once('ready', () => {
    fs.open('transactions.txt', 'w+', function () {});
    fs.open('accountBalances.txt', 'w+', function () {});
})

client.login(process.env.DISCORD_TOKEN);



client.on('message', message => {
    if(message.content == "!ping") {
        message.reply("pong");
    }
    if(message.content == "!test") {
        Account.findNumber("Wow");
    }
})

const Account = {
    findNumber(name) {
        fs.readFileSync("accountBalances.txt")
    }
}