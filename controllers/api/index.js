const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const postto = require('./postto');

// router.use('/', postto);
router.use('/users', userRoutes);

module.exports = router;

