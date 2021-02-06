const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.userController);

router.use('/ask', controllers.topicController);

module.exports = router;