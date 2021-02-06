const config = require('./config/config');
const routes = require('./routes');
const connectDB = require('./config/database');
const topicService = require('./services/topicService');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(routes);

connectDB();

topicService.create({
    title: 'DemoTitle', 
    subject: 'English',
    grade: '12',
    description: 'A demo description'
})

app.listen(config.port, console.log(`Server is running on port ${config.port}.`));