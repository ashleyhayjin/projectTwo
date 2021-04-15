const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
const postto = require('../postto');

router.use('/api', apiRoutes);
router.use('/post', postto);
router.use('/', homeRoutes);

module.exports = router;