/**
 * Created by ThuNH on 22/08/2016.
 */
'use strict';
const http = require('http');
// //req = request(gửi đi) - res = response(Trả về)
// let server = http.createServer(function (req, res) {
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
// });
//
// var port = 3000;
// server.listen(port);
// console.log('Server is running at http://localhost:' + port);

const fs = require('fs');
var port = 3000;
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.readdir('.',function (err, files) {
        for (var i=0; i< files.length;i++){
            res.write('<a href="/' + files[i] + '">' + files[i] + '</a></br>');
        }
        res.end();
    })
}).listen(port);
console.log('Server is running at http://localhost:' + port);