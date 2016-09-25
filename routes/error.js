var express = require('express');
var router = express.Router();

/* Page not found. */
router.get('/', function(req, res, next) {
  res.send('Page not found');
});

module.exports = router;
