const Topic = require('../models/Topic');

async function create(data) {
    try {
        const topic = new Topic({ ...data, date: new Date().toLocaleString('en-GB') });

        return await topic.save();
    }
    catch (error) {
        console.log(error.message);
    }
}

async function getAll() {
    try {
        return await Topic.find().lean();
    }
    catch (error) {
        console.log(error.message);
    }
}

async function getOne(id) {
    try {
        return await Topic.findById(id).populate('comments').lean();
    }
    catch (error) {
        console.log(error.message);
    }
}

async function addComment(topicId, commentId) {
    try {
        await Topic.findByIdAndUpdate(topicId, {
            $addToSet: {
                comments: [commentId]
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    addComment
}