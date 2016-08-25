/**
 * Created by ThuNH on 25/08/2016.
 */
'use strict'

var app = require('express')();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');


nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'html');

app.use(bodyParser.urlencoded());

app.get('/', function (req,res) {
    res.render('form');
})

app.post('/', function (req,res) {
    var data = req.body;
    res.render('thank',{data : data});
})

app.listen(3333, function () {
    console.log('server running at 3333');
})