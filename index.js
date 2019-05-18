const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '/';

var version = '1.0.0';

bot.on('ready', () =>{
    console.log('This bot is online!');
})



bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: `/help`,
            type: "STREAMING",
            url: "https://www.twitch.tv/riotbae"
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
        case 'yourmom':
            message.channel.sendMessage('is sucking yarrak')
            break;
        case 'eyecon':
            message.channel.sendMessage('is a bot')
            break;
        case 'kohibot':
            message.channel.sendMessage('what')
            break;
        case 'whirlaroni':
            message.channel.sendMessage('stop adding shit commands you yarrak')
            break;
        case 'burger':
            message.channel.sendMessage('no burger for u')
            break;
        case "help":
            let helpEmbed = new Discord.RichEmbed()
           .setTitle("Help Information")
           .addField("MEMBER COMMANDS", "ping - kohi - yourmom - info - embed - beepboop - eyecon - kohibot - burger - whirlaroni")
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
    
    }
})

bot.login(process.env.token);
