const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
// const postto = require('./postto');
const jokeRoutes = require('./jokeRoutes.js');
// router.use('/', postto);
router.use('/users', userRoutes);
router.use('/jokes', jokeRoutes);

module.exports = router;

