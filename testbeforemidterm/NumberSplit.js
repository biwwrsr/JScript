function numberSplit(number){
    ans = Math.floor(number/2);
    if(number %2 == 1 ){
        console.log("{",ans,",",ans+1,"}");
    }else if(number %2 == -1 ){
         console.log("{",ans+1,",",ans,"}");
    }
    else{
         console.log("{",ans,",",ans,"}");
    }
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));