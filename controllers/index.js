const router = require('express').Router();

const apiRoutes = require('./api');
const thinghere = require('./thinghere');

router.use('/api', apiRoutes);
router.use('/', thinghere);

module.exports = router;