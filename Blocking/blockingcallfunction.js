/**
 * Created by ThuNH on 10/08/2016.
 */
function now(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(fn, miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
    fn();
}

now('> Start to wait');
wait(function(){
    now('> End of waiting');
}, 5000);
now('> Do other task');

//ProcessNextTick(Đẩy code xuống hàng đợi cuối cùng để xử lý)

function now2(txt) {
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

now2('> Start to wait');
process.nextTick(function(){
    now2('> Do this task at the end of event queue');
});
now2('> Do other task');
//wait(1000);
now2('> Do other task2');