/**
 * Created on : 20/03/2017
 * Author : Babar Bilal <babarxm@gmail.com>
 */

var Categories = require("./models/categories");
var Books = require("./models/books");

module.exports = function(server){
  console.log("socket is running");
  server.on("connection", function(socket){
    console.log("New Connection");
    socket.on("disconnect", function(id){
        console.log("Disconneccted");
    });

    socket.on("add_book", function(data){
      socket.emit("new_book", data);
    });

    socket.on("updated_book", function(data){
      socket.emit("book_updated", data);
    });

    socket.on("remove_book", function(data){
      socket.emit("book_removed", data);
    });
  });
}
