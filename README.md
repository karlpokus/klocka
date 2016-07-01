# klocka
Timing things in node.js

# install
```
$ npm install klocka
```

# wat?
- klocka logs the duration between A and B in ms. A is wherever you decide to put it and B is when response.end (or equivalent) is called.
- Works with express and vanilla node
- No dependecies
- Unobtrusive use

# Usage w Express
```javascript
// to capture all and everything
app.use(klocka); // logs: klocka <method> <path> <duration in ms>

// to capture a specific route
app.use('/items', klocka);

// note: Express adds two middlewares by default (query and expressInit) that will not be included in the duration.
```

# TODOs
- add colours to output?
- use table to align output?
- def add more tests
- add avg per route? Would require a closure

# Licence
MIT