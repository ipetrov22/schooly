
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3333,
        URI: 'mongodb+srv://User:user1234@cluster0.lxupn.mongodb.net/<dbname>?retryWrites=true&w=majority',
    },
    production: {}
};

module.exports = config[env];