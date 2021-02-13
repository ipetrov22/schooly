const { Router } = require('express');
const router = Router();

const topicService = require('../services/topicService');

router.post('/create', async (req, res) => {
    try {
        const topic = await topicService.create(req.body);

        return res.json(topic);
    }
    catch(error) {
        console.log(error.message);
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const topics = await topicService.getAll();

        return res.json(topics);
    }
    catch(error) {
        console.log(error.message);
    }
});

router.get('/getOne', async (req, res) => {
    try {
        const topic = await topicService.getOne(req.query.id);
        return res.json(topic);
    }
    catch(error) {
        console.log(error.message);
    }
});

module.exports = router;