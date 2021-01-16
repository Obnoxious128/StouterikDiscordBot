module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message,args){

        if(message.member.roles.cache.has('696058499464953967')){
         message.channel.send('pong!')

    }else{
        message.channel.send('Gy hebt daar geen rechten voor jongen. Eet wa meer groentjes da ge wa groeit jong!')

        }
    }
}