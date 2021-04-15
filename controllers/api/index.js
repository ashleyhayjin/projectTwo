const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jokeRoutes = require('./jokeRoutes');
const categoryRoutes = require('./categoryRoutes')

router.use('/users', userRoutes);
router.use('/jokes', jokeRoutes);
router.use('/categories', categoryRoutes)

module.exports = router;

