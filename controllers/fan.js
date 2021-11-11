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
exports.fan_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: fan detail: " + req.params.id);
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
exports.fan_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: fan delete DELETE " + req.params.id);
};

// Handle Costume update form on PUT.
exports.fan_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: fan update PUT" + req.params.id);
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
