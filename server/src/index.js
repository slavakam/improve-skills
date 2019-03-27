const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mongoose = require('mongoose');

const router = require('./router');
const config = require('./db');

mongoose.Promise = Promise;

mongoose.connect(config.DB, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(cors());
router(app);

app.listen(3001, err => {
  console.log('Server is running on port: 5000');
});