/**
 * Created by ThuNH on 19/08/2016.
 */

//Object đơn giản
// var person = {
//     firstName: "Nguyen Ha",
//     lastName: "Thu",
//     company: "Topica",
//     age: "22"
// };
// //Đọc theo Ecma6
// for (let key in person){
//     console.log(key);
// }
//
// //Đọc theo Object sử dụng forEach
// Object.keys(person).forEach(function (key) {
//     console.log(key);
// });

//Obj nâng cao
function ObjWithProto(){
    "use strict";
    this.foo = 'foo_val';
}
//Kế thừa từ Function(Prototype)
ObjWithProto.prototype = {bar: 'bar_val'};

var dict = new ObjWithProto();
dict.foobar = 'foobar_val';

//Sử dụng for let in để duyệt qua để bỏ qua kế thừa
for(let key in dict){
    if (dict.hasOwnProperty(key))
        console.log(key);
}
console.log("----");
//Obj loại bỏ thuộc tính gắn thêm, chỉ lấy thuộc tính chính chủ
Object.keys(dict).forEach(function (key) {
    console.log(key);
});