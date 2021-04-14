function dropRight(arr,num){
    if(num==null){
        arr.pop();
        return console.log(arr)
    }
    else if(num == 0){
        return console.log(arr)
    }
    else count = 0;
    do{
        arr.pop();
        count++;
    }while(count < num)
    return console.log(arr)
}
dropRight([1,2,3])
dropRight([1,2,3],2)
dropRight([1,2,3],5)
dropRight([1,2,3],0)


