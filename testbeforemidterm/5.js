function starRating(arr){
    total = 0; 
    for(i=0;i>arr.lenght;i++){
       total = arr[i]*(i+1);
    }
    return console.log(total);    
}
starRating([55,67,98,115,61])

