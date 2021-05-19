const {Router} = require('express');
const controllers = require('../controllers/main')
const router = Router();

router.get('/',controllers.home1);
router.get('/home2',controllers.home2);
router.get('/home3',controllers.home3);

module.exports = router;