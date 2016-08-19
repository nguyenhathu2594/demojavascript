'use strict';
//Khi khai báo tham số mặc định nên để sau tham số mình sẽ truyền vào để tránh lỗi
// var add = function (a,b=2,c=4) {
//     return a+b;
// }
//
// console.log(add(2));

//Truyền mảng sử dụng Object

// var dst = {foo:1, bar:2};
// var src = {bar:3, foofoo:4};
// var target = Object.assign({}, dst, src);
//
// console.log(target);

//Truy cập lấy 1 biến trong 1 mảng

//Khai báo mảng
//
// var person = {
//     name: {first:"Nguyễn", last:"Hà Thu"},
//     study: {cls: "Học NodeJS", school: "Tự học"},
//     rank: "Newbie"
// };
//
// //Lấy 1 phần tử
//
// //Không chạy được
// var {rank: myRank} = person;
// console.log(myRank);
// //Chạy được
// var cls = person.study.cls;
// console.log(cls);