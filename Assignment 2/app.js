const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('First middleware');
  res.send('<h1>The "Users" Page</h1>')
});

app.use('/', (req, res, next) => {
  console.log('Second middleware');
  res.send('<h1>Da da ya</h1>');
});

app.listen(5000);