const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', '2.html'));
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', '1.html'));
});

module.exports = router;