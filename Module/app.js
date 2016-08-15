/**
 * Created by ThuNH on 10/08/2016.
 */
'use strict';
//Gọi tới Module
// const foo = require('./foo');
// //Kiểm thử
// console.log(foo);
// foo.noiHello();
// foo.noiChao();
//
// const foo2 = require('./foo2');
// foo2.noiTiengNhat();
//
// const nghichdao = require('./Baitap/ngichdaochuoi');

//Cách 1
/*const Person = require('./foo2').Person;
var person = new Person('Thu');
person.sayName();*/

//Cách 2
const foo2 = require('./foo2');
var person = new foo2.Person('Thu');
person.sayName();

class P1 {
    constructor(name){
        this.name = name;
    }
    sayname(){
        console.log(this.name);
    }
}

var p1 = new P1('Nhung');
p1.sayname();