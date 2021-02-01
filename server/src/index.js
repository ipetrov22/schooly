const config = require('./config/config');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(config.port, console.log(`Server is running on port ${config.port}.`));