const Comment = require('../models/Comment');

async function create(data) {
    try {
        const comment = new Comment({ ...data, date: new Date().toLocaleString('en-GB') })
        return await comment.save();
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    create
}