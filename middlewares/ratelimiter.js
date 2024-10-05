
const express = require('express');
const app = express();

// global middleware (app.use) will rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// will block them with a 404.
// User will be sending in their user id in the header as 'user-id'

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)
// 
app.use(function(req, res, next) {
  const userId = req.headers["user-id"];

  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
    if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).send("no entry");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
})


app.get('/user', function(req, res) {
  res.status(200).json({ name: 'prajjwal' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;