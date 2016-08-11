/**
 * Created by ThuNH on 11/08/2016.
 */
//Bài tập về nghịch đảo
//Tạo Prototype để đảo ngược
String.prototype.daonguoc = function () {
    var chuoi = '';
    for (var i = this.length -1; i >= 0; i--){
        chuoi += this.charAt(i);
    }
    return chuoi;
}

module.exports = String;