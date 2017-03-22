
var mongoose = require("../db_con");
var Schema = mongoose.Schema;

var categories = new Schema({
  category_id: Schema.ObjectId,
  name: { type: String, default: "" },
  author: { type: String, default: "" },
  type: { type: String, default: "" }
});

module.exports = mongoose.model("books", categories);