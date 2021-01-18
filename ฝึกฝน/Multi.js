function Multi(number){
    text ="";
    if(number == 0){
        text+="0 * everynumber = 0";
    }
    else{
    for(i=1 ; i < 13 ;i++){
        text+=number + " x " + i + " = " + (number*i) + "\n";
    }}
    return text;
}

console.log(Multi(0));