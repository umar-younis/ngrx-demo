var categories = require("./models/categories");
var handlers = {};
var data = [{
    name: "History"
  }, {
    name: "Programming"
  }, {
    name: "Technology"
  }, {
    name: "Islamic"
  }];

handlers.initCategories = function(){
  categories.find({}, function(err, cats){
    if (cats.length === 0) {
      data.forEach(function(item){
        var c = new categories(item);
        c.save();
      });
    }
  })
}

module.exports = handlers;