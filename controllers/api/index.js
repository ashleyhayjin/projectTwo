const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postto = require('./postto');
const jokeRoutes = require('./jokeRoutes');
const categoryRoutes = require('./categoryRoutes')

router.use('/post', postto);
router.use('/users', userRoutes);
router.use('/jokes', jokeRoutes);
router.use('/categories', categoryRoutes)

module.exports = router;

