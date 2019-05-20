// This commands requires the discord.js to create embeds
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    
    
    // This will contain some extra things
    
    // Role Verification -- This will run only if a user has a certain role (optional)
    if (!message.member.roles.find(r => r.name === 'roleName')) return message.channel.send('This requires the role: roleName');
    
    // Permission Verification -- This will run only if a user has a certain permission (optional)
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMINISTRATOR');
    
    // First, we want to check if user had a input
    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');
    
    // Then, create the embed
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by ${message.author.username}`);
    // Finally, using await send the message
    let msg = await message.channel.send(embed);
    // The sent message will now be stored in the msg variable
    
    // React to the message
    await msg.react('✅');
    await msg.react('❌');
    
    
    message.delete({timeout: 1000});

}
