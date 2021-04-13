const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postto = require('./postto');
const jokeRoutes = require('./jokeRoutes');

router.use('/post', postto);
router.use('/users', userRoutes);
router.use('/jokes', jokeRoutes);

module.exports = router;

