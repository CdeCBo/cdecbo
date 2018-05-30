var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var api = require('./routes/cdecbo');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/.well-known/pki-validation/EDEC63215BAF18EDC0619FD57F1D9263.txt", function(req,res) {
  res.set({"Content-Disposition":"attachment; filename=\"EDEC63215BAF18EDC0619FD57F1D9263.txt\"", "Content-type":"text/plain"});
  res.send("8A320242B450CEC957EC5F9A35E45FAC7BDBF050AEAC25B3633B5D5F1FC7D1DD comodoca.com 5b0e8b3d5749a");
});

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
