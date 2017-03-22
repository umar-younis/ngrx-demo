
var mongoose = require("../db_con");
var Schema = mongoose.Schema;

var categories = new Schema({
  name: { type: String, default: "" }
});

module.exports = mongoose.model("categories", categories);