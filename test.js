'use strict';

var test = require('tape');

test("validator accepts valid email, a scale of 15 and positive feedback");
test("validator rejects unfilled email, a scale of 15 and positive feedback");
test("validator rejects valid email, a scale of 9 and positive feedback");
