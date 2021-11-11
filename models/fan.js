const mongoose = require("mongoose") 
const fanSchema = mongoose.Schema({ 
 Brand: String, 
 price: Number, 
 color: String 
}) 
 
module.exports = mongoose.model("fan", 
fanSchema) 