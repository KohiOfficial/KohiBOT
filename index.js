const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '-';

var version = '1.0.8';

bot.on('ready', () =>{
    console.log('This bot is online!');
})



bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: `KohiBOT | -help`,
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
            message.channel.sendMessage ('KohiBOT Kohi tarafından oluşturulan bir discord botudur. Fazla şeyler içermese de. Yakinda çok iyi bir hale gelecek.')
            break;
        case 'yardim':
            message.channel.sendMessage ('Yardım için -help yazabilirsiniz.')
            break;
        case 'kick':
            if(!args[1]) message.channel.send('You need to specify a person')
                                          
            const userr = message.mentions.users.first();
            
            if(user){
                const memberr = member.guild.member(userr);
                
                if(member){
                    member.kick('You were kicked for breaking thr rules.').then(() =>{
                        message.reply(`Successfully kicked ${user.tag}`);
                    }).catch(err =>{
                        message.reply('I was unable to kick that member');
                        console.log(err);
                    });
                } else{
                    message.reply("That user isn\´t in the guild")
                } else {
                    message.reply('that user isn\'t in the guild");
                                  
          
            default:
            message.channel.send("That command doesn't exist / Böyle bir komut yok")
            break;

            
    
    }
})

bot.login(process.env.token);
