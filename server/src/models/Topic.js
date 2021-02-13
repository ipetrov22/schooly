const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    creator: {
        email: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
    },
    comments: [{
        ref: 'Comment',
        type: mongoose.Types.ObjectId
    }],
    date: {
        type: String,
        default: new Date().toLocaleString('en-GB')
    }
});

module.exports = mongoose.model('Topic', topicSchema);