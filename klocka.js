module.exports = function(req, res, next) {
  var url = (req.originalUrl) ? req.originalUrl : req.url,
      name = "klocka " + req.method + url;
  console.time(name);
  res.on('finish', function(){
    console.timeEnd(name);
  });
  if (next) return next();
}