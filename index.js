// import TOKEN from the .env file using dotenv
require('dotenv').config();
const TOKEN = process.env.TOKEN;
console.log(TOKEN);
const PREFIX = "!";

//import discord.js
const Discord = require('discord.js');

//login to discord
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

//display success message after logging in
client.on('ready', () => {
    console.log('logged in as ${client.user.tag}!');
});

//listen for messages
client.on('message', async message => {
   

    //parse the message
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    //create a ping command
    if (command === 'ping') {
        message.reply('pong');
    }
    //send embed with user avatar
    if (command === 'avatar') {
    const embed = new Discord.MessageEmbed()
        .setTitle('User Avatar')
        .setColor('#0099ff')
        .setThumbnail(message.author.avatarURL())
        .setImage(message.author.avatarURL())
        .setTimestamp()
    message.channel.send({embeds: [embed]});
    }
    

    //create a membercount command that responds with the total number of members in the server
    if (command === 'membercount') {
        message.channel.send(`There are ${message.guild.memberCount} members in this server!`);
    }
    //create a poll command that sends the args of the command in and react with a checkmark and x emote
    if (command === 'poll') {
        let message = await message.reply(args.join(' '));
        await message.react('✅');
        await message.react('❌');
    }
    //CREATE A BOT COMMAND THAT SENDS A MESSAGE TO THE CHANNEL
    if (command === 'bot') {
        message.reply('This bot is a bot made by shiko')
    }
    if (command === 'tmas5ar3afadel') {
        message.reply('can ye')
    }
    if (command === 'gofuckyourself') {
        message.reply('fuck you enta wle ')
    }
    
    //create a bot command that sends a message to the channel
    if (command === 'kol-5ara') {
        message.reply('mabeklak')
    }
    if (command == 'sekaymi') {
        message.reply('tampa')
    }
    //create a command that makes the bot videocall someone  
    if (command === 'tmas5ar-3a-fadel') {
        message.reply('fatabeel')
    }
    //create a help menu that sends a message with the commands
    if (command === 'help') {
        message.reply('m!ping \n m!avatar \n m!membercount \n m!poll \n m!bot \n m!tmas5ar3afadel \n m!gofuckyourself \n m!elle-nekte \n m!kol-5ara \n m!sekaymi \n m!tmas5ar-3a-fadel')
    }
    
    // get a random meme from google    
    if (command === 'meme') {
        message.reply('https://memecenter.com/search/container')
    }
    //get a random cat from google
    if (command === 'cat') {
        message.reply('https://www.google.com/search?q=cat&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj_pq_Z5_XVAhWLz5QKHZ-oBQQ_AUIDigB&biw=1366&bih=638#imgrc=_')
    }

   // respond with a randome number between 1 and 10
    if (command === 'random') {
        message.reply(Math.floor(Math.random() * 10) + 1);
    }
    //respond with a random text 
    if (command === 'ellenekte') {
        let text = [
            'mara wa7ad ken meshe am za7at fadel',
            'mara wa7ad tawil am met 5abtt braso teyara',
        ]
        message.reply(text[Math.floor(Math.random() * text.length)]);
    }
    if (command == 'faye2fadel') {
        message.reply('@fadel.shaka feee2 wle')
    }
    // send spam to the channel
    if (command === 'spam') {
        for (let i = 0; i < 100; i++) {
            message.channel.send('spam');
        }
    }
    // mention the user
    if (command === 'mention') {
        message.reply(`<@!${message.author.id}>`);
    }
    // create a tictactoe game
    if (command === 'tictactoe') {
        message.reply('tictactoe game started');
    }
    // import random memes from random websites
    if (command === 'meme') {
        message.reply('https://memecenter.com/search/container')
    }
    // stop the bot
    if (command === 'stop') {
        message.reply('stopping the bot');
        client.destroy();
    }
    

    
    

})

client.login(TOKEN);
