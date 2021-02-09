const { Router } = require('express');
const router = Router();

const topicService = require('../services/topicService');

router.get('/', async (req, res) => {
    console.log('In get');
});

router.post('/', async (req, res) => {
    console.log('In post');
});

module.exports = router;