# klocka
Timing things in node.js

# install
```
$ npm install klocka
```

# wat?
- klocka logs time elapsed between A and B in ms. A is wherever you decide to put it and B is when response.end (or equivalent) is called.
- Works with express and vanilla node
- No dependencies
- Uses [time and timeEnd](https://nodejs.org/api/console.html#console_console_time_label) that requires Node v0.1.104+

# Usage w Express
```javascript
// require
var klocka = require('klocka');

// to capture all and everything
app.use(klocka); // logs: klocka <method> <path> <duration in ms>

// to capture a specific route
app.use('/items', klocka);

// note: Express adds two middlewares by default that will not be included in the duration. Read more [here](http://www.nickstefan.net/blog/view/express-under-the-hood)
```
# Test
```
$ npm test
```

# TODOs
- add colours to output?
- use table to align output?
- add an average per route?
- add custom stop?
- use server event 'request' to start? [Not solved](http://stackoverflow.com/questions/38159709/add-eventlistener-to-http-server-before-calling-createserver)

# Licence
MIT
