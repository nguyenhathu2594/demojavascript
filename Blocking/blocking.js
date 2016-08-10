/**
 * Created by ThuNH on 10/08/2016.
 */
function now(txt){
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(miligiay){
    "use strict";
    var starttime = new Date().getTime();
    while  (new Date().getTime() < starttime + miligiay);
}

now('> Bắt đầu chờ');
wait(5000);
now('> Kết thúc chờ');