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

async function getOne(_id) {
    try {
        return await Topic.find({ _id }).lean();
    }
    catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    create,
    getAll,
    getOne
}