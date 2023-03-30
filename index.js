require("dotenv").config();
const { Client, GatewayIntentBits, Message} = require('discord.js');
const bot = new Client({
     intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

const prefix = 'lg';

let { pg1name } = require("./pokegen1.json")

bot.once('ready', () => {
    console.log('LosGamers BOT is online!');
});

var linkgif = "https://projectpokemon.org/images/normal-sprite/";


bot.on('messageCreate', async message => {

    var delay = 6000;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }

    if(command === 'poke'){
        var randpokeg1 = pg1name[Math.floor( Math.random() * pg1name.length)];
        var correctAnswer = randpokeg1;
        var randpickg1 = linkgif + randpokeg1 + ".gif";
        message.channel.send(randpickg1);
        message.channel.send(correctAnswer);

        const filter = m => m.author.id === message.author.id;
        await message.channel.awaitMessages(filter, { max: 1, time: 5000, errors: ['time', 'max']});
        if(message.content === correctAnswer)
        {
            message.channel.send("boa");
        }
        else
        {
            message.channel.send("nope");
        }
    }

});

bot.login(process.env.TOKEN);

