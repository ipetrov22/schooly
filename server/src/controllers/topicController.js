const { Router } = require('express');
const router = Router();

const topicService = require('../services/topicService');

router.post('/', async (req, res) => {
    try {
        const topic = await topicService.create(req.body);

        return res.json(topic);
    }
    catch(error) {
        console.log(error.message);
    }
});

module.exports = router;