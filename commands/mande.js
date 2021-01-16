module.exports = {
    name: 'mande',
    description: "this is a mande command!",
    execute(message,args){

        if(message.member.roles.cache.has('696058499464953967')){
         message.channel.send('In ui MANDE!')

    }else{
        message.channel.send('Gy hebt daar geen rechten voor jongen. Eet wa meer groentjes da ge wa groeit jong!')

        }
    }
}