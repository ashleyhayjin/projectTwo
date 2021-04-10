const router = require('express').Router();

<<<<<<< HEAD
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
=======
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
>>>>>>> d361e07547b488ea46ebcb828499b23b1e0a2733

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
module.exports = router;