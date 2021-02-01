const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(3333, console.log(`Server is running on port ${3000}.`))