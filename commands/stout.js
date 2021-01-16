const { VoiceBroadcast, VoiceChannel } = require("discord.js");

module.exports = {
    name: 'stout',
    description: "Dit verandert de role van de persoon en brengt die naar een specifieke voice chat",
    execute(message,args){
            const target = message.mentions.users.first();
            
        if(message.member.roles.cache.has('696058499464953967')){
            if(target){
                const membertarget = message.guild.members.cache.get(target.id);
            membertarget.roles.add('798655604910194698');
            membertarget.roles.remove('730421849137086508');
            membertarget.voice.setChannel('798655376563241002')
            message.channel.send('IN DEN HOEK!')
            }
            else{
                message.channel.send('Je kon die gebruiker geen rol geven.');
            }
        }else{
            message.channel.send('Gy hebt daar geen rechten voor jongen. Eet wa meer groentjes da ge wa groeit jong!')
        }
    }
}