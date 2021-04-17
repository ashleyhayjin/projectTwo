const router = require('express').Router();
console.log("Bot is starting");
const { Joke } = require('../models');
var Twit = require('twit');

var T = new Twit({
    consumer_key : process.env.API_KEY,
    consumer_secret : process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

router.get('/', async (req, res) => {
    let success = await tweetThis();
    if (success) {
        res.redirect('/');
    } else {
        res.status(400);
    }

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
            console.log("Something is wrong", err);
        }else{
            console.log("Works fine");
        }
    }
    return true;
}

// module.exports = router;