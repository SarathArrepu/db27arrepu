var express = require('express');
const fan_controlers= require('../controllers/fan');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fan', { title: 'Search results fan' });
});

/* GET detail fan page */
router.get('/detail', fan_controlers.fan_view_one_Page);

/* GET create costume page */ 
router.get('/create', fan_controlers.fan_create_Page); 

/* GET create update page */ 
router.get('/update', fan_controlers.fan_update_Page);

/* GET create costume page */ 
router.get('/delete', fan_controlers.fan_delete_Page); 
 

module.exports = router;

