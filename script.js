function insert(num) {

    let n = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = n + num;
}
function clean() {
    document.querySelector('.display').innerHTML = '';
}
function back(){
    let display = document.querySelector('.display').innerHTML;
    document.querySelector('.display').innerHTML = display.substring(0, display.length -1);
}
function result(){
    let display = document.querySelector('.display').innerHTML;
    if(display) {
        document.querySelector('.display').innerHTML = eval(display);
    }
    else {
        document.querySelector('.display').innerHTML = '0';
    }
}