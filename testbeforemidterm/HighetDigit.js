function highestDigit(num){
    high = 0;
    num = num.toString();
    for(i = 0; i <= num.length ; i++){
        if(high < num.charAt(i)){
            high = num.charAt(i);
        }
    }
    return high;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));