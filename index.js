const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '-';

var version = '1.2.5';

bot.on('ready', () =>{
    console.log('This bot is online!');
})



bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: `Hyphen.js | -yardim`,
            type: "STREAMING",
            url: "https://www.twitch.tv/riotbae
        }
    });
});

bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");
    if(!message.content.startsWith(PREFIX)) return;
    switch(args[0]){
        case 'burger':
            message.channel.sendMessage('Lezzetli bir burger\! \:hamburger:')
            break;
        case "yardim":
            let helpEmbed = new Discord.RichEmbed()
           .setTitle("Yardım Bilgisi")
           .addField("ÜYE KOMUTLARI", "```info - kullanici - hakkinda```")
           .addField("EĞLENCE KOMUTLARI", "```beepboop - kizy - reportkizy - ekmek - siir - kahve - burger - sarki```")
           .addField("ADMIN KOMUTLARI", "```temizle - ban - kick```")
           .setColor(0xFFFFFF);
           
           message.author.send(helpEmbed)
           break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Sonradan birşey eklemeyi unuttun\. Örn\: version\.')
            }
            break;
        case 'temizle':
            if(!args[1]) return message.reply('Lütfen silmek istediğiniz mesaj sayısını yazın\. \(1 - 10 - 100 sadece)')
            message.channel.bulkDelete(args[1]);
            break;
        case 'kullanici':
            const embed = new Discord.RichEmbed()
            .setTitle('Kullanıcı Bilgisi')
            .addField('Kullanıcı Adı', message.author.username)
            .addField('Bot Version', version)
            .addField('Olduğu Server', message.guild.name)
            .addField('Roller', "Roles: " + message.member.roles.map(role => role).slice(1).join(", ")) // user, roles
            .setColor(0x33FF9F)
            .setTimestamp()
            .setThumbnail(message.author.avatarURL);
            message.channel.sendEmbed(embed);
            break;
        case 'beepboop':
            message.channel.sendMessage ('boop bip')
            break;
        case 'hakkinda':
            message.channel.sendMessage ('Hyphen, Vertical tarafından oluşturulan bir discord botudur. Bazı güzel, eğlenceli, saçma komutlar bulunduruyor. neyse pek bir işe yaradığını söyleyemem \:thinking:')
            break;
        case 'kizy':
            message.channel.sendMessage ('is hacking')
            break;
        case 'reportkizy':
            message.channel.sendMessage ('Hemen hallediyorum\!')
            break;
        case 'ekmek':
            message.channel.sendMessage ('İşte ekmeğin burada! \:bread:')
            break;
        case 'siir':
            message.channel.sendMessage ('Okuma yazma bilmiyorum\.')
            break;
        case 'kahve':
            message.channel.sendMessage ('Hadi rahatlayalım\, kahveni al \:wink: \:coffee:')
            break;
        case 'sarki':
            message.channel.sendMessage ('ENES BATURĞ YOUTOP BUDURCVFDG')
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
            message.channel.send("Böyle bir komut yok gibi görünüyor\, \-yardim yazarak komut listesine bak")
            break;


            
    
    }
})

bot.login(process.env.token);
