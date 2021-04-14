function arrayValuesType(arr){
    ans =[];
    for(a = 0 ; a < arr.length ; a++){
        ans.push(typeof arr[a]);
    }
    return ans;
}

console.log(arrayValuesType([1,2,"null",[]]))