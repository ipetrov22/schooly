const Topic = require('../models/Topic');
 
function create(data) {
    let topic = new Topic(data);

    return topic.save();
}

module.exports = {
    create,
}