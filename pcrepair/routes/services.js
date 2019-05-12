var express = require('express');
var router = express.Router();

var fs = require('fs');
var result;
fs.readFile('json/services.json','utf8',function(err,data){
	if(err)
		throw err;
	else 
		result = JSON.parse(data);
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', { 
  title: 'Services',
  name : 'nikita',
  services : result
  });
});

module.exports = router;
