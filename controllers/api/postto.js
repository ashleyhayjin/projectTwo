const router = require('express').Router();
const { input } = require('../../models');
const fs = require('fs');
const path = require('path');
const dotenv = require(dotenv);

//Everything is placeholder until we get the everything finalized

let poster = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000,
    strictSSL: true
})

poster.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)

function onAuthenticated(err, res) {
    if (err) {
        throw err
    }
    console.log('Authentication successful, running bot')
}

poster.post('statuses/update', { status: 'hello world'}, function (err, data, response) {
    console.log(data)
})

module.exports = router;

