const router = require('express').Router();
const { input } = require('../../models');

//Everything is placeholder until we get the everything finalized

let poster = new Twit({
    consumer_key: input.key,
    consumer_secret: input.secret,
    access_token: input.access_token,
    access_token_secret: input.access_token_secret,
    timeout_ms: 60*1000,
    strictSSL: true
})

poster.post('statuses/update', { status: input.text }, function(err, data, response) {
    console.log(data);
})

module.exports = router;