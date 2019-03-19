const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
// const mongoose = require('mongoose');

// mongoose.connect('mongodb', { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/user', (req, res) => {
  res.json({ name: 'Slava', age: 24 });
});

app.listen(5000, err => {
  console.log('Listening');
});