function random(value_one, value_two){
    value_one = parseInt(value_one)
    value_two = parseInt(value_two)
    value_two = value_two++
    var va = Math.random() * value_two;
    while(va < value_one){
        var va = Math.random() * value_two;
    }
    va = parseInt(va)
    return va;
}
function Int(number){
    return parseInt(number)
}
function hour(){
    var date = new Date();
    var hour = date.getHours();
    return hour
}
function min(){
    var date = new Date();
    var min = date.getMinutes();
    return min
}
function sec(){
    var date = new Date();
    var sec = date.getSeconds();
    return sec
}
function date(){
    var date = new Date();
    return date
}