/**
 * Created by ThuXeko on 8/7/2016.
 */
function factorial(n){
    "use strict";
    if (typeof(n) != "number"){
        return NaN;
    }
    if (n === parseInt(n)){
        if (n<=1){
            return 1;
        } else
        {
            var result = 1;
            for (var i = 2; i <= n; i++){
                result *= i;
            }
            return result;
        }
    } else {
        return NaN;
    }
}


//Đệ quy

function fact(n){
    "use strict";
    if (typeof(n) != "number"){
        return NaN;
    }
    if (n === parseInt(n)){
        //Stack Overflow <- Tránh
        if (n<=1){ //Điểm kết thúc để tránh đệ quy vô tận
            return 1;
        } else
        {
            var result = 1;
            for (var i = 2; i <= n; i++){
                return n * fact(n-1);
            }
            return result;
        }
    } else {
        return NaN;
    }
}

console.log(factorial(3));
console.log(fact(3));