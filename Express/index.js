/**
 * Created by ThuNH on 25/08/2016.
 */
'use strict';

var express = require('express');
var app = express();
//Middleware
// app.use(function (req,res,next) {
//     var start = +Date.now();
//     var method = req.method;
//     var url = req.url;
// })
// //Khai báo route để chạy
// app.get('/', function (req, res) {
//     res.send('Hello Express');
// })
// //Khai báo cổng
// app.listen(3333);

var app = require('express')();
app.use(function(req,res,next){
    res.send('hello');
    next();
});
app.get('/', function(req,res) {
    res.send('world')
});
app.listen(3333);