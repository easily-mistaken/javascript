const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', function(req, res) {
  throw new Error("some error");
  // 500 
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});


// 1. If there is ever an exception, the end user sees a status code of 404
// 2. Maintains the errorCount variable whose value should go up every time there is an exception in any endpoint

// error handling middleware
app.use(function(err, req, res, next) {
  res.status(404).send({})
  errorCount = errorCount + 1;
})

module.exports = app;