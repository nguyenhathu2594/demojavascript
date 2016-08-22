'use strict';

const fs = require('fs');
//Install request trên npm trước
const request = require('request');
//Install progress trên npm
const ProgressBar = require('progress');

//Gọi để download 1 file từ internet

var totalByte, downloadByte;
var bar;
let req = request.get('http://www.qqxxzx.com/images/fantasy-pictures/fantasy-pictures-4.jpg');
console.time('Download');

req.on('error', function (err) {
        console.log('Download Lỗi', err);
})
    //Hứng response trả về lần đầu tiên sau request(Trả về dung lượng của file)
    .on('response',function (res) {
        totalByte = parseInt(res.headers['content-length'],10);

        //Không sử dụng Progress Bar
        // downloadByte = 0;
        // console.log('Tổng số bytes: ' + totalByte);

        //Sử dụng Progress Bar
        bar = new ProgressBar('downloading[:bar] :percent :etas',{
            complete: '-',
            incomplete: ' ',
            width: 50,
            total: totalByte
        });
    })
    //Kích hoạt mỗi khi có gói dữ liệu trả về(Hiển thị dữ liệu tải về)
    .on('data',function (chunk) {
        //Không sử dụng Progress Bar
        // downloadByte += chunk.length;
        // console.log(downloadByte + " / " + totalByte);

        //Sử dụng Progress Bar
        bar.tick(chunk.length);
    })

req.pipe(fs.createWriteStream('fantasy.jpg'))
    //Hứng sự kiện từ Pipe
    .on('finish',function () {
        console.timeEnd('Download');
        console.log('Đã Download file');
    })
    .on('error', function (err) {
        console.log('Download Lỗi', err);
    });