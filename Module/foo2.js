/**
 * Created by ThuNH on 10/08/2016.
 */
//Khai báo
'use strict';
module.exports.Person = class {
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}