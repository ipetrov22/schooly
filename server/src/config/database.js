const mongoose = require('mongoose');

const URI = 'mongodb+srv://Dario:userDB@schoolydb.21nfr.mongodb.net/schoolydb?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to DB!');
}

module.exports = connectDB;