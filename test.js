const test = require('tape');

const caffeine = require('./index');

test("loads", t => {
  t.equals(caffeine.positions.data.length, 72);
  t.equals(caffeine.positions.data[0], -3.380413);
  t.equals(caffeine.numbers.length, 24);
  t.equals(caffeine.numbers[0], 1);
  t.end();
});
