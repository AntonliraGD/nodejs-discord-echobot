const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    // check if message isn't from us
    if (msg.author == client.user) {
      return;
    }
    else if (msg.content === 'ping') {
      msg.reply('pong');
      }
    else if (msg.content === 'que') {
      msg.reply('so');
      }
    else if (msg.content === 'rra') {
      msg.reply('tumama');
      }
    else if (msg.content === 'hola') {
      msg.reply('wenas');
      }
    else if (msg.content === 'a') {
      msg.reply('e');
      }
    else if (msg.content === 'i') {
      msg.reply('o');
       }
    else if (msg.content === 'u') {
      msg.reply('burriquito como tu');
       }
    else if (msg.content === 'cp') {
      msg.reply('club penguin');
       }
    else if (msg.content === 'slaughterhouse') {
      msg.reply('ME PASE ESLAUTERJAAAAAU');
      }
    else if (msg.content === 'when te pasas eslauterjau') {
      msg.reply('ME PASE ESLAUTERJAAAAAU');
      }
    else if (msg.content === 'como') {
      msg.reply('comiendo lomo');
    }
    else {
    }
});

client.login(process.env.TOKEN); //login bot using token
