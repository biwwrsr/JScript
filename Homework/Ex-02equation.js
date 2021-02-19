function equation(text){
    let n = text.lenght;
    sum = 0;
    for(i = 0 ; i < text.length ; i++){
        if(i == 0){
            sum = parseInt(text[i]);
        }
        if(text[i] == "+"){
            i++;
            num = parseInt(text[i]);
            sum += num;
        }
        if(text[i] == "-"){
            i++;
            num = parseInt(text[i]);
            sum -= num;
        }
        if(text[i] == "*"){
            i++;
            num = parseInt(text[i]);
            sum *= num;
        }
    }
    return sum;
}
console.log(equation("1+1+1+1+1"));

