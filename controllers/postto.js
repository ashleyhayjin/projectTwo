const router = require('express').Router();
const { Joke } = require('../models');
const Twit = require('twit');

router.get('/', async (req, res) => {
    try {
        let devTwit = new Twit({
            consumer_key: process.env.TWITTER_API_KEY,
            consumer_secret: process.env.TWITTER_API_SECRET,
            access_token: process.env.TWITTER_ACCESS_TOKEN,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
            timeout_ms: 60*1000,
            strictSSL: true
        });

        devTwit.get('account/verify_credentials', {
            include_entities: false,
            skip_status: true,
            include_email: false
        }, onAuthenticated)

        function onAuthenticated(err, res) {
            if (err) {
                throw err
            }
            console.log('Authentication successful, running Twitter bot')
        }
        let number = await Joke.count();
        let randomJoke = Math.floor(Math.random() * (number) + 1);
        const jokeText = await Joke.findByPk(randomJoke);
        setTimeout(function(){
            devTwit.post('statuses/update', { status: jokeText.joke_text }, function(err, data, response) {
                console.log(number, data);
            });
        }, 100);
    } catch (err) {
        res.status(400).json(err);
    }
    return res.redirect('back');
});

module.exports = router;
