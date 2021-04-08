const router = require('express').Router();

const postto = require('./postto');

router.use('/', postto);

module.exports = { router };

