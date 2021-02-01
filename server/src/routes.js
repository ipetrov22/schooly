const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.userController);

module.exports = router;