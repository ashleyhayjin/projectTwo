const router = require('express').Router();
console.log("Bot is starting");
var config = require('../config/config');
const { Joke } = require('../models');
var Twit = require('twit');

var T = new Twit(config);

router.get('/', async (req, res) => {
    tweetThis();
})

//setInterval(tweetThis,3600000)//every 1 hour


async function tweetThis() {

    let number = await Joke.count();
    let randomJoke = Math.floor(Math.random() * (number) + 1);
    const stat = await Joke.findByPk(randomJoke);
    console.log(stat);
    var tweet = {
        status: stat.joke_text
    }
    console.log(tweet);
    T.post('statuses/update', tweet ,tweeted);

    function tweeted (err, data, response) {
        if(err){
            console.log("Something is wrong", err)
        }else{
            console.log("Works fine")
        }
    } 
}

module.exports = router;