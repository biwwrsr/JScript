function dropRight(arr,num){
    if(num == null){
        arr.pop();
    }else if(num == 0){
        return arr;
    }
    else{
        count = 0;
        do{
            arr.pop();
            count++;
        }while(count < num)
    }
    return arr;
}

console.log(dropRight([1,2,3]));
console.log(dropRight([1,2,3],2));
console.log(dropRight([1,2,3],5));