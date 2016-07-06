'use strict';

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.all('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function () {
  console.log('Server running on: ' + PORT);
});
