function Multi(){
    let number = 4;
    if(number == 0){
        return("0 * everynumber = 0");
    }
    for(i=1 ; i < 13 ;i++){
        console.log(number + " x " + i + " = " + (number*i));
    }
}
console.log(Multi());