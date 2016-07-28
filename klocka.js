module.exports = function(req, res, next) {
  // if express is used .originalUrl is present and to be used, otherwise use .url
  // Express rewrites .url See -> http://expressjs.com/en/4x/api.html#req.originalUrl
  var url = (req.originalUrl) ? req.originalUrl : req.url,
      d = new Date(),
      t = d.getTime(),
      name = "klocka (" + t + ") " + req.method + url;

  console.time(name);
  res.on('finish', function(){
    console.timeEnd(name);
  });
  if (next) return next();
}
