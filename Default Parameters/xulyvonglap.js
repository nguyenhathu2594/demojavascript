/**
 * Created by ThuNH on 18/08/2016.
 */
'use strict';
//Vòng lặp đơn giản: for, while,do while

//For
//Khai báo được nhiều biến khai báo sau dấu phẩy
for (var i = 0, j= 1;i < 10; i++,j++){
    //Chạy code
    console.log(i);
    console.log(j);
}

//While: Kiểm tra điều kiện sau đó mởi chạy
var i = 10;
while (i > 0){
    console.log(i);
    i--;
}

//Do While: Chạy xong mới kiểm tra điều kiện
do {
    console.log(i);
    i--;
}while(i>0);