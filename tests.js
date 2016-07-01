var test = require('tape'),
    klocka = require('./klocka.js');

test('required', function(t){
  t.equal(typeof klocka, 'function', 'is function');
  t.end();
});