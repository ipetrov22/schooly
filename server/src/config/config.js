
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3333,
        URI: 'mongodb+srv://admin:admin@cluster0.lxupn.mongodb.net/Schooly?retryWrites=true&w=majority',
    },
    production: {}
};

module.exports = config[env];