const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { 
        type: String, 
    },
    creator: { 
        email: {
            type: String
        },
        id: {
            type: String
        }
    },
    date: { 
        type : Date, 
        default: Date.now 
    },
})

module.exports = mongoose.model('Comment', commentSchema);