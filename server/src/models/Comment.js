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
        type : String, 
        default: new Date().toLocaleString('en-GB')
    },
})

module.exports = mongoose.model('Comment', commentSchema);