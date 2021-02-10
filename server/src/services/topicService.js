const Topic = require('../models/Topic');
 
async function create(data) {
    try {
        let topic = new Topic(data);

        return await topic.save();
    }
    catch(error) {
        console.log(error.message);
    }
}

async function getAll() {
    try {
        return await Topic.find().lean();
    }
    catch(error) {
        console.log(error.message);
    }
}

module.exports = {
    create,
    getAll,
}