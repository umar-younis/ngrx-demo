var Categories = require("./models/categories");
var Books = require("./models/books");
var Router = require("express").Router();

var handler = {};

handler.getCategories = function(req, res){
  Categories.find({}, function(err, cats){
    res.json(cats);
  });
}

handler.addBook = function(req, res){
  var book = new Books(req.body);
  book.save(function(err, b){
    res.json(b);
  })
}

handler.removeBook = function(req, res){ }

handler.getBooks = function(req, res){
  Books.find({}, function(err, books){
    res.json(books);
  })
}

Router.get("/categories", handler.getCategories);

Router.get("/books", handler.getBooks);

Router.post("/addBook", handler.addBook);

Router.delete("/removeBook", handler.removeBook);

module.exports = Router;