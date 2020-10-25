const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzY4NjYxMzExMzQwOTM3MjI2.X5DtoQ.ga0VJo0-pjDCrpxpWjmb5-MmDPQ);//BOT_TOKEN is the Client Secret
