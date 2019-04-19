const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mongoose = require('mongoose');

const router = require('./router');

mongoose.Promise = Promise;

mongoose.connect(
  'mongodb://car:password1@ds055742.mlab.com:55742/improve',
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());
app.use(cors());
router(app);

app.listen(3001, err => {
  console.log('Server is running on port: 5000');
});