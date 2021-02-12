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
            type: String
        },
        id: {
            type: String
        }
    },
    comments: [{
        ref: 'Comment',
        type: mongoose.Types.ObjectId
    }],
    date: { 
        type : Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Topic', topicSchema);