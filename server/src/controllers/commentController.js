const { Router } = require('express');
const router = Router();

const { commentService } = require('../services');
const { topicService } = require('../services');

router.post('/create', async (req, res) => {
    try {
        const comment = await commentService.create(req.body.comment);
        await topicService.addComment(req.body.topicId, comment._id)

        return res.json(comment);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;