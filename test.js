'use strict';

var test = require('tape');
var validator = require('./validator.js');

test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

test("validator accepts valid feedback, scale and email", function (t) {
  let data = {
    "feedback": "amazing awesome blithesome",
    "scale": "10",
    "email": "aladar@citromail.hu"
  };
  t.equal(validator(data), true);
  t.end();
})

test("validator accepts valid email, a scale of 15 and positive feedback", function (t) {
  let data = {
    "feedback": "amazing awesome blithesome",
    "scale": "15",
    "email": "aladar@citromail.hu"
  };
  t.equal(validator(data), true);
  t.end();
});

test("validator rejects unfilled email, a scale of 15 and positive feedback", function (t) {
  let data = {
    "feedback": "amazing awesome blithesome",
    "scale": "15",
    "email": ""
  };
  t.equal(validator(data), false);
  t.end();
});

test("validator rejects valid email, a scale of 9 and less positive feedback", function (t) {
  let data = {
    "feedback": "amazing awesome",
    "scale": "9",
    "email": "aladar@citromail.hu"
  };
  t.equal(validator(data), false);
  t.end();
});

test("validator rejects invalid email, a scale of 9 and positive feedback", function (t) {
  let data = {
    "feedback": "amazing awesome great",
    "scale": "9",
    "email": "aladarcitromail.hu"
  };
  t.equal(validator(data), false);
  t.end();
});

test("validator rejects invalid email, a scale of 9 and less positive feedback", function (t) {
  let data = {
    "feedback": "amazing awesome",
    "scale": "9",
    "email": "aladarcitromail.hu"
  };
  t.equal(validator(data), false);
  t.end();
});

test("validator rejects valid email, a scale of 9 and a random feedback", function (t) {
  let data = {
    "feedback": "A karfiol leves nem tul finom",
    "scale": "9",
    "email": "aladar@citromail.hu"
  };
  t.equal(validator(data), false);
  t.end();
});
