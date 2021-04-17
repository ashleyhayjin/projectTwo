const router = require('express').Router();

const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
// const botpost = require('./botpost');

router.use('/api', apiRoutes);
// router.use('/post', botpost);
router.use('/', homeRoutes);

module.exports = router;