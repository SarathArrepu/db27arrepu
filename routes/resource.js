var express = require('express');
const fan_controllers= require('../controllers/fan');  
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var fan_controller = require('../controllers/fan'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
router.get('/', fan_controllers.fan_view_all_Page );  
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/fan', fan_controller.fan_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/fan/:id', fan_controllers.fan_delete); 
 
// PUT request to update Costume. 
router.put('/fan/:id', 
fan_controllers.fan_update_put); 
 
// GET request for one Costume. 
router.get('/fan/:id', fan_controllers.fan_detail); 
 
// GET request for list of all Costume items. 
router.get('/fan', fan_controllers.fan_list); 

/* GET create costume page */ 
router.get('/delete', fan_controllers.fan_delete_Page);
 
module.exports = router; 
 