/**
 * Created by ThuXeko on 8/7/2016.
 */
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var person2 = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
person2.gioitinh = "Nam";
delete person2.eyeColor;
console.log(person2);

var person4 = {};
person4.firstName = "John";
person4.lastName = "Doe";
person4.age = 50;
person4.eyeColor = "blue";

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

Person.prototype.showInfo = function () {
    "use strict";
    console.log("name: ", this.firstName, this.lastName, ", age: ", this.age);
}

myFather.showInfo();
myMother.showInfo();


var x1 = new Object();    // A new Object object
var x2 = new String("Hello World");    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean()    // A new Boolean object
var x5 = new Array();     // A new Array object
var	x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object

console.log(x2);
x22 = "Hello World";
console.log(x22);

var date = new Date('2015-03-25');
console.log(date);
