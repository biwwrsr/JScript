function arrayValuesType(arr){
    result = [];
    for(i = 0;i<arr.length;i++){
        result.push(typeof arr[i]);
    }
    return console.log(result)
}
arrayValuesType([1,2,"null",[]])
