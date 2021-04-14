function secondLargest(arr){
    max = arr[0];
    second = 0;
    for(n = 1 ; n < arr.length ; n++){
        if(max < arr[n]){
            second = max;
            max = arr[n];
        }
        else{
            if(second < arr[n]){
                second = arr[n];
            }
        }
    }
    return second;
}

console.log(secondLargest([10,40,30,20,50]));
console.log(secondLargest([25,143,89,13,105]));