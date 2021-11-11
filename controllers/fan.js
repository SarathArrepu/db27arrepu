var fan = require('../models/fan'); 
 
// List of all Costumes 
exports.fan_list = async function(req, res) { 
    try{ 
        thefan = await fan.find(); 
        res.send(thefan); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.fan_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: fan detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.fan_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.fan_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: fan delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.fan_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: fan update PUT' + req.params.id); 
}; 