const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '-';

var version = '1.1.6';

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
            message.channel.sendMessage('\:eyes:')
            break;
        case 'burger':
            message.channel.sendMessage('no burger for u')
            break;
        case "help":
            let helpEmbed = new Discord.RichEmbed()
           .setTitle("Help Information")
           .addField("MEMBER COMMANDS", "info - user - eyecon - kohibot - give")
           .addField("FUN COMMANDS", "ping - kohi - beepboop - burger - ekmek - bread - coffee - kahve - poem - killkohibot - kohisucks")
           .addField("ADMIN COMMANDS", "clear - ban - kick")
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
        case 'user':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Username', message.author.username)
            .addField('Bot Version', version)
            .addField('Current Server', message.guild.name)
            .addField('Roles', "Roles: " + message.member.roles.map(role => role).slice(1).join(", ")) // user, roles
            .setColor(0x33FF9F)
            .setTimestamp()
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
        case 'kizy':
            message.channel.sendMessage ('is hacking')
            break;
        case 'reportkizy':
            message.channel.sendMessage ('omg yes brb')
            break;
        case 'bread':
            message.channel.sendMessage ('Here is your bread! \:bread:')
            break;
        case 'ekmek':
            message.channel.sendMessage ('İşte ekmeğin burada! \:bread:')
            break;
        case 'coffee':
            message.channel.sendMessage ('Lets chill\, here is your coffee \:wink: \:coffee:')
            break;
        case 'poem':
            message.channel.sendMessage ('Roses are red\, Violets are blue\, Omae wa mou\, shindeiru\.')
            break;
        case 'kahve':
            message.channel.sendMessage ('Hadi rahatlayalım\, kahveni al \:wink: \:coffee:')
            break;
        case 'killkohibot':
            message.channel.sendMessage ('\:sweat:')
            break;
        case 'kohisucks':
            message.channel.sendMessage ('He is gonna get mad about this\... \:eyes:')
            break;
         case 'give':
            if(args[1] === 'money'){
                message.channel.sendMessage('no');
            }else{
                message.channel.sendMessage('Thats not how it works lol')
            }
            break;
        case "kick":
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`You can't use this command`);
            let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!kickUser) return message.channel.send(`Can't find user `);
            let kickReason = args.slice(2).join(" ") || "no reason";
            if(kickUser.hasPermission("ADMINISTRATOR")) return message.channel.send(`You can't kick this person`);

            message.guild.member(kickUser).kick(kickReason);
    try{
            kickUser.send(`You have been kicked from ${message.guild.name} for ${kickReason}`);
    }catch{
        console.log(Error);
    }
            break;
        case "ban":
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You can't use this command`);
            let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!banUser) return message.channel.send(`Can't find user `);
            let banReason = args.slice(2).join(" ") || "no reason";
            if(banUser.hasPermission("ADMINISTRATOR")) return message.channel.send(`You can't ban this person`);

            message.guild.member(banUser).ban(banReason);
    try{
            banUser.send(`You have been banned from ${message.guild.name} for ${banReason}`);
    }catch{
        console.log(Error);
    }
            break;
            
                                  
          
            default:
            message.channel.send("That command doesn't exist / Böyle bir komut yok")
            break;

            
    
    }
})

bot.login(process.env.token);
