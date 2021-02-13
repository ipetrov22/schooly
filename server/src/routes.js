const { Router } = require('express');
const router = Router();

const controllers = require('./controllers');

router.use('/user', controllers.userController);

router.use('/topic', controllers.topicController);

router.use('/comment', controllers.commentController);

module.exports = router;