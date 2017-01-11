'use strict';

const test = require('tape');
const validator = require('./validator.js');

test('validator accepts valid positive feedback, scale and email', function (t) {
  let data = {
    "feedback": "amazing awesome blithesome",
    "scale": "10",
    "email": "aladar@citromail.hu",
  };
  t.equal(validator(data), true);
  t.end();
})

test('validator accepts valid email, a scale of 15 and positive feedback', function (t) {
  let data = {
    "feedback": "amazing awesome blithesome",
    "scale": "15",
    "email": "aladar@citromail.hu",
  };
  t.equal(validator(data), true);
  t.end();
});

test('validator rejects unfilled email, a scale of 15 and positive feedback', function (t) {
  let data = {
    "feedback": "amazing awesome blithesome",
    "scale": "15",
    "email": "",
  };
  t.equal(validator(data), false);
  t.end();
});

test('validator rejects valid email, a scale of 9 and less positive feedback', function (t) {
  let data = {
    "feedback": "amazing awesome blalbla",
    "scale": "9",
    "email": "aladar@citromail.hu",
  };
  t.equal(validator(data), false);
  t.end();
});

test('validator rejects valid email, a scale of 9 and a positive feedback', function (t) {
  let data = {
    "feedback": "amazing awesome smart",
    "scale": "9",
    "email": "aladar@citromail.hu",
  };
  t.equal(validator(data), false);
  t.end();
});

test('validator rejects invalid email, a scale of 9 and positive feedback', function (t) {
  let data = {
    "feedback": "amazing awesome great",
    "scale": "9",
    "email": "aladarcitromail.hu",
  };
  t.equal(validator(data), false);
  t.end();
});

test('validator rejects invalid email, a scale of 9 and less positive feedback', function (t) {
  let data = {
    "feedback": "amazing awesome blalbla",
    "scale": "9",
    "email": "aladarcitromail.hu",
  };
  t.equal(validator(data), false);
  t.end();
});

test('validator rejects valid email, a scale of 9 and a random (non-positive) feedback', function (t) {
  let data = {
    "feedback": "A karfiol leves nem tul finom, bezzeg a spenot...",
    "scale": "9",
    "email": "aladar@citromail.hu",
  };
  t.equal(validator(data), false);
  t.end();
});

test('validator rejects valid email, a scale of 10 and a random (non-positive) feedback', function (t) {
  let data = {
    "feedback": "A karfiol leves nem tul finom, bezzeg a spenot...",
    "scale": "10",
    "email": "aladar@citromail.hu",
  };
  t.equal(validator(data), false);
  t.end();
});
