module.exports = {
    name: 'bonk',
    description: "this is a bonk command!",
    execute(message,args){

        if(message.member.roles.cache.has('696058499464953967')){
         message.channel.send('BONK: Go to stout jail!')

    }else{
        message.channel.send('Gy hebt daar geen rechten voor jongen. Eet wa meer groentjes da ge wa groeit jong!')

        }
    }
}