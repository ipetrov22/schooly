const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: /[\w \d]+/
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Topic', topicSchema);