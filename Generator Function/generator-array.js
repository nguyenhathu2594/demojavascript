/**
 * Created by ThuNH on 16/08/2016.
 */
'use strict';

var range = function *(start, end, step) {
    while (start < end){
        yield start;
        start += step;
    }
}

for (let i of range(0,10,2)){
    console.log(i);
}