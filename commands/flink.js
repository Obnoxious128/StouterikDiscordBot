module.exports = {
    name: 'flink',
    description: "Dit command haalt de stoute role terug weg",
    execute(message,args){
            const target = message.mentions.users.first();
            
        if(message.member.roles.cache.has('696058499464953967')){
            if(target){
                const membertarget = message.guild.members.cache.get(target.id);
                membertarget.roles.remove('798655604910194698');
                membertarget.roles.add('730421849137086508');
                membertarget.voice.setChannel('567837654675226666')
                message.channel.send(`Ale ${target} komt er maar weer uit.`)
            }
            else{
                message.channel.send('Je kon de role van de gebruiker niet wegnemen.');
            }
        }else{
            message.channel.send('Gy hebt daar geen rechten voor jongen. Eet wa meer groentjes da ge wa groeit jong!')
        }
    }
}