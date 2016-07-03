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
- Uses time and timeEnd that requires [Node v0.1.104+](https://nodejs.org/api/console.html#console_console_time_label)

# Usage w Express
```javascript
// to capture all and everything
app.use(klocka); // logs: klocka <method> <path> <duration in ms>

// to capture a specific route
app.use('/items', klocka);

// note: Express adds two middlewares by default (query and expressInit) that will not be included in the duration.
```
# Test
```
$ npm test
```

# TODOs
- add colours to output?
- use table to align output?
- def add more tests
- add an average per route? Would require a closure
- add custom stop?
- use server.on('request') to start?

# Licence
MIT
