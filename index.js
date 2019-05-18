const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '>';

var version = '1.0.3';

bot.on('ready', () =>{
    console.log('This bot is online!');
})



bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: `KohiBOT | >help`,
            type: "PLAYING",
        }
    });
});

bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");
    if(!message.content.startsWith(PREFIX)) return;
    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'kohi':
            message.channel.sendMessage('is awesome')
            break;
        case 'eyecon':
            message.channel.sendMessage('is a bot')
            break;
        case 'kohibot':
            message.channel.sendMessage('what')
            break;
        case 'burger':
            message.channel.sendMessage('no burger for u')
            break;
        case "help":
            let helpEmbed = new Discord.RichEmbed()
           .setTitle("Help Information")
           .addField("MEMBER COMMANDS", "ping - kohi - info - embed - beepboop - eyecon - kohibot - burger - about")
           .addField("MODERATOR COMMANDS", "clear")
           .setColor(0xFFFFFF);
           
           message.author.send(helpEmbed)
           break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Invalid Args')
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Version', version)
            .addField('Current Server', message.guild.name)
            .setColor(0x33FF9F)
            .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed);
            break;
        case 'beepboop':
            message.channel.sendMessage ('boop bip')
            break;
        case 'about':
            message.channel.sendMessage ('KohiBOT is a discord bot created by Kohi. It have some cool stuff. Thats all, for now..')
            break;
        case 'hakkinda':
            message.channel.sendMessage (KohiBOT Kohi tarafindan olusturulan bir discord botudur. Fazla seyler icermese de. Yakinda cok iyi bir hale gelecek.)
            break;
             default:
            message.channel.send("That command doesn't exist")
            break;

            
    
    }
})

bot.login(process.env.token);
