const router = require('express').Router();
require('dotenv').config();
const { Joke } = require('../../models');

//Everything is placeholder until we get the everything finalized

let devTwit = new Twit({
    consumer_key: process.env.KEY,
    consumer_secret: process.env.SECRET,
    access_token: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRET,
    timeout_ms: 60*1000,
    strictSSL: true
})

let number = await Joke.count();
let randomJoke = Math.floor(Math.random() * (number - 1));
const jokeText = await Joke.findByPk(randomJoke);

devTwit.post('statuses/update', { status: jokeText.joke_text }, function(err, data, response) {
    console.log(data);
})

module.exports = router;