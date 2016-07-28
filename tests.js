var test = require('tape'),
    klocka = require('./klocka.js'),
    ee = require('events'),
    req1 = {url: '/items', method: 'GET'},
    req2 = {url: '/items', method: 'POST'},
    res1 = new ee(),
    res2 = new ee(),
    duration = 250,
    stringToMS = function(str) {
      // klocka (ts) GET/items: 2005.754ms
      return +(str.split(':')[1].trim().replace('ms', ''));
    };
    require('console.mute');

test('the basics', function(t){
  t.equal(typeof klocka, 'function', 'is function');

  klocka(req1, res1, function(){
    console.mute();
    res1.emit('finish');
    var data = console.resume();
    var ms = stringToMS(data[0]);

    t.ok(ms > 0, 'log is > 0');
  });

  klocka(req2, res2);
  setTimeout(function(){
    console.mute();
    res2.emit('finish');
    var data = console.resume();
    var ms = stringToMS(data[0]);

    t.ok(ms > duration, 'log is > duration');
  }, duration);

  t.end();
});
