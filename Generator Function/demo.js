/**
 * Created by ThuNH on 16/08/2016.
 */
'use strict';
// var js =2;
//
// //Khai báo bằng Emma
// let js2 = 3;
//
// console.log(js);
// console.log(js2);

//Dynamic Function
//Khai báo sẽ có dạng "Function *"
var demnguoc = function *(start){
    while (start > 0){
        yield start; //Sẽ dừng ở đây khi chạy tới dòng này, có tín hiệu trả về ms chạy tiếp
        start--;
    }
}

var count = demnguoc(5);
var callback = function () {
    let item = count.next();
    if (!item.done){
        console.log(item.value);
        setTimeout(callback,1000); //1s
    }
}

callback();