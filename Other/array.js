/**
 * Created by ThuNH on 05/08/2016.
 */
var cars = ["Tesla","Honda","BMW"];
// console.log(cars.valueOf());

// for (var i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }
//
// console.log(cars.join(" - "));

cars.push("Toyota");
cars.push("Yamaha");
console.log(cars.valueOf());

while (cars.length > 0){
    cars.pop();
    console.log(cars.valueOf());
}