/**
 * Created on : 20/03/2017
 * Author : Babar Bilal <babarxm@gmail.com>
 */

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ngrx-demo-app");

module.exports = mongoose;