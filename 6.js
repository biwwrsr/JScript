function additivePersistence(num){
    num = num.toString();
    ans = 0;

    for(i=0;i<num.length;i++){
        if(num.length == 0){
            ans = 0 ;
        }
        else if (num.length > 1){
            for(i=0;i < num.length;i++){
                ans += parseInt(num.charAt(i));
            }
            ans = ans.toString();
            ans2 = 0;
            if(ans.length == 2){
                for(i=0;i < num.length;i++){
                    ans2 += parseInt(ans.charAt(i));
                }
                return console.log(ans2)
            }
            else{
                return console.log(ans)
            }
        }
    }
    
    return console.log(ans);
}
additivePersistence(12345)
additivePersistence(123)
additivePersistence(1)
