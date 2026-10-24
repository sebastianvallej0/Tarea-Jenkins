const test = require('node:test');
const assert = require('node:assert');
const { suma } = require('./suma.js');

test('suma 2 + 3 es 5', () => {
  assert.strictEqual(suma(2, 3), 5);
});

test('suma negativos', () => {
  assert.strictEqual(suma(-1, -1), -2);
});
