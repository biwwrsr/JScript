function countTure(arr){
    count = 0;
    for(n = 0 ; n < arr.length ; n++){
        if(arr[n] == true){
            count++;
        }
    }
    return count;
}

console.log(countTure([true, false , false ,true , false]));
console.log(countTure([false , false ,false , false]));
console.log(countTure([]));