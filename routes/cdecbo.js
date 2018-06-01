var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

router.get('/status', function(req, res, next) {
  res.json({status: "ok"});
});

module.exports = router;
