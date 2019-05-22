const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '-';

var version = '1.2.7';

bot.on('ready', () =>{
    console.log('This bot is online!');
})



bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: `-yardım, -yardım dm`,
            type: "STREAMING",
            url: "https://www.twitch.tv/riotbae"
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
        case "yardım":
            let helpEmbed = new Discord.RichEmbed()
           .setTitle("Yardım Bilgisi")
           .addField("ÜYE KOMUTLARI", "\```info - profil - hakkında```")
           .addField("EĞLENCE KOMUTLARI", "\```beepboop - kizy - reportkizy - ekmek - şiir - kahve - burger - şarkı```")
           .addField("ADMIN KOMUTLARI", "\```temizle - ban - kick```")
           .setColor(0xFFFFFF);
            
           if(args[1] === "dm") return message.author.send(helpEmbed)
           message.channel.send(helpEmbed)
           break;
        
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Sonradan birşey eklemeyi unuttun\. Örn\: version\.')
            }
            break;
        case 'temizle':
            if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
            if(!args[1]) return message.reply('Lütfen silmek istediğiniz mesaj sayısını yazın\. \(1 - 10 - 100 sadece)')
            message.channel.bulkDelete(args[1]).then(message.channel.send(`Deleted **${args[1]}** messages`))
            break;
        case 'profil':
            let memberr = message.mentions.members.first() || message.member,
userr = memberr.user;
            let online = bot.emojis.find(e => e.name === "Online");
        let idle = bot.emojis.find(e => e.name === "Idle");
        let dnd = bot.emojis.find(e => e.name === "DoNotDisturb");
        let offline = bot.emojis.find(e => e.name === "Offline");

if(userr.presence.status === "online"){
var stats = `${online} Online`
};

if(userr.presence.status === "idle"){
var stats = `${idle} Idle`
};

if(userr.presence.status === "dnd"){
var stats = `${dnd} Do Not Disturb`
};

if(userr.presence.status === "offline"){
var stats = `${offline} Offline`
};
            const embed = new Discord.RichEmbed()
            .setTitle('Kullanıcı Bilgisi')
            .addField('Kullanıcı Adı', userr.username)
            .addField('Bot Version', version)
            .addField('Olduğu Server', message.guild.name)
            .addField("Durum",stats)
            .addField('Roller', "Roles: " + message.member.roles.map(role => role).slice(1).join(", ")) // user, roles
            .setColor(0x33FF9F)
            .setTimestamp()
            .setThumbnail(userr.avatarURL);
            message.channel.sendEmbed(embed);
            break;
        case 'beepboop':
            message.channel.sendMessage ('boop bip')
            break;
        case 'hakkında':
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
        case 'şiir':
            message.channel.sendMessage ('Okuma yazma bilmiyorum\.')
            break;
        case 'kahve':
            message.channel.sendMessage ('Hadi rahatlayalım\, kahveni al \:wink: \:coffee:')
            break;
        case 'şarkı':
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


            
            client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "botpaneltemizle") {
 if (!message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Panel ayarlanmamış.")
   if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    const a = message.guild.channels.find(channel => channel.name === "Bot Kullanımı").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Bellek Kullanımı: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Kullanıcılar: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Toplam Kanal: ${client.channels.size.toLocaleString()}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
         const e = message.guild.channels.find(channel => channel.name === `Ping: ${client.ping}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!e) return console.log("guildStatsChannel")
            const f = message.guild.channels.find(channel => channel.name === `Yapımcım: Emirhan Saraç`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!f) return console.log("guildStatsChannel")
               const g = message.guild.channels.find(channel => channel.name === `Kütüphanesi: Discord.js`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!g) return console.log("guildStatsChannel")
      message.channel.send(" Kanallar temizlendi.")
    }
  if (command === "botpanel") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Bot Kullanımı', 'category', [{
  id: message.guild.id,
  deny: ['SPEAK'],
  deny: ['CONNECT']  
}]);
        
 message.guild.createChannel(`Bellek Kullanımı: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Kullanıcılar: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, 'voice')
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Sunucular: ${client.guilds.size.toLocaleString()}  `, 'voice')
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Toplam Kanal: ${client.channels.size.toLocaleString()}`, 'voice')
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Ping: ${client.ping}`, 'voice')
.then(channel =>
                   channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Yapımcım: Emirhan Saraç`, 'voice')
.then(channel =>
                   channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
message.guild.createChannel(`Kütüphanesi: Discord.js`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
  message.channel.send("Bot Bilgi Paneli Ayarlandı!")

        })    
    
}
});


            
    
    }
})

bot.login(process.env.token);
