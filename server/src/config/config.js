
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3333,
        URI: 'mongodb+srv://Dario:userDB@schoolydb.21nfr.mongodb.net/schoolydb?retryWrites=true&w=majority',
    },
    production: {}
};

module.exports = config[env];