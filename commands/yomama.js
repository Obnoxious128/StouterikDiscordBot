module.exports = {
    name: 'yomama',
    description: "yomama jokes",
    execute(message,args){
var yomamajokes = [
    "Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.",
    "Yo mama's so fat, when she skips a meal, the stock market drops.",
    "Yo mama's so fat, it took me two buses and a train to get to her good side.",
    "Yo mama's so fat, when she goes camping, the bears hide their food.",
    "Yo mama's so fat, if she buys a fur coat, a whole species will become extinct.",
    "Yo mama's so stupid, she stared at a cup of orange juice for 12 hours because it said 'concentrate'.",
    "Yo mama's so stupid when they said it was chilly outside, she grabbed a bowl.",
    "Yo mama's so stupid, she put airbags on her computer in case it crashed.",
    "Yo mama's so ugly, she threw a boomerang and it refused to come back.",
    "Yo mama's so ugly, she made a blind kid cry.",
    "Yo mama's so ugly, her portraits hang themselves.",
    "Yo mama's so ugly, when she was little, she could to trick-or-treat by phone.",
    "Yo mama's so poor, the ducks throw bread at her.",
    "Yo mama's so poor, she chases the garbage truck with a grocery list.",
    "Yo mama so fat, her belt size is 'equator.'",
    "Yo daddy's so ugly, he stuck his dick out of the window only to get the wind to blow it."
    ]
       
    if(message.member.roles.cache.has('696058499464953967')){
         const randomNumber = Math.floor(Math.random() * 17);
         var joke = yomamajokes[randomNumber];
         message.channel.send(joke)

    }else{
        message.channel.send('Gy hebt daar geen rechten voor jongen. Eet wa meer groentjes da ge wa groeit jong!')

        }
    }
}