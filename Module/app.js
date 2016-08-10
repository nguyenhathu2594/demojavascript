/**
 * Created by ThuNH on 10/08/2016.
 */
'use strict';
//Gọi tới Module
const foo = require('./foo');
//Kiểm thử
console.log(foo);
foo.noiHello();
foo.noiChao();

const foo2 = require('./foo2');
foo2.noiTiengNhat();