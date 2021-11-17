var fan = require("../models/fan");

// List of all Costumes
exports.fan_list = async function (req, res) {
  try {
    thefan = await fan.find();
    res.send(thefan);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Costume.
//exports.fan_detail = function (req, res) {
  //res.send("NOT IMPLEMENTED: fan detail: " + req.params.id);
//};
exports.fan_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await fan.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 

// Handle Costume create on POST.
exports.fan_create_post = async function (req, res) {
  console.log(req.body);
  let document = new fan();
  document.Brand = req.body.Brand;
  document.price = req.body.price;
  document.color = req.body.color;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Costume delete form on DELETE.
//exports.fan_delete = function (req, res) {
  //res.send("NOT IMPLEMENTED: fan delete DELETE " + req.params.id);
//};
exports.fan_delete = async function(req, res) { 
  console.log("delete "  + req.params.id) 
  try { 
      result = await fan.findByIdAndDelete( req.params.id) 
      console.log("Removed " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": Error deleting ${err}}`); 
  } 
}; 

// Handle Costume update form on PUT.
//exports.fan_update_put = function (req, res) {
  //res.send("NOT IMPLEMENTED: fan update PUT" + req.params.id);
//};
exports.fan_update_put = async function(req, res) { 
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
  try { 
      let toUpdate = await fan.findById( req.params.id) 
      // Do updates of properties 
      if(req.body.Brand)  
             toUpdate.Brand = req.body.Brand; 
      if(req.body.price) toUpdate.price = req.body.price; 
      if(req.body.color) toUpdate.color = req.body.color; 
      let result = await toUpdate.save(); 
      console.log("Sucess " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
  } 
}; 

// VIEWS
// Handle a show all view
exports.fan_view_all_Page = async function (req, res) {
  try {
    thefan = await Costume.find();
    res.render("fan", { title: "fan Search Results", results: thefan });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
