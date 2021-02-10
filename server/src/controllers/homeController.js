const { Router } = require('express');

const router = Router();

const topicService = require('../services/topicService');

router.get('/', async (req, res) => {
    try {
        let topics = await topicService.getAll();
        return topics;
    }
    catch(error) {
        console.log(error.message);
    }
});

module.exports = router;