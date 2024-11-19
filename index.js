const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

// Q.1 check given Number is positive or negative
app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }
  res.send('Number is ' + result);
});

// Q.2 check-number is Even or odd
app.get('/chek-even-odd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 === 0) {
    result = 'Even';
  } else {
    result = 'odd';
  }
  res.send('Number is ' + result);
});

// Q.3 check if User is logged in or not
app.get('/check-login', (req, res) => {
  console.log('isLoggedIn: ' + typeof req.query.isLoggedIn);
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'logged in';
  } else {
    result = 'not logged in';
  }
  res.send('User is ' + result);
});

// Q.4 check if a user is eligible for discount
app.get('/check-disount', (req, res) => {
  let userAge = parseFloat(req.query.age);
  let result;
  if (userAge > 65) {
    result = 'eligible for a discount';
  } else {
    result = 'not eligible for a discount';
  }
  res.send('User is ' + result);
});

// Q.5 check number is positive,negative or zero
app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number === 0) {
    result = 'zero';
  } else if (number < 0) {
    result = 'negative';
  } else {
    result = 'positive';
  }
  res.send('Number is ' + result);
});

// Q.6 check if temperature is old,warm or hot
app.get('/check-temperature', (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) {
    result = 'cold';
  } else if (temperature < 25) {
    result = 'warm';
  } else {
    result = 'hot';
  }
  res.send('Temperature is ' + result);
});
// Q.7 check activity leel is low,moderate or high
app.get('/check-activity-level', (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) {
    result = 'low';
  } else if (steps < 10000) {
    result = 'moderate';
  } else {
    result = 'high';
  }
  res.send('Activity level is ' + result);
});

// Q.8 check social media post has low,medium or high enagagement
app.get('/check-enagagement', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'low';
  } else if (likes < 500) {
    result = 'medium';
  } else {
    result = 'high';
  }
  res.send('Enagagement level is ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
