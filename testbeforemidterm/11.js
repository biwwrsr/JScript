function removeABC(word){
    result = "";
    check = false;
    for(i=0;i<=word.length;i++){
        if (word.charAt(i) == "a" || word.charAt(i) == "b" || word.charAt(i) == "c" ){
            check=true;
        }
    }
    if(check == true){
        for(i=0;i<=word.length;i++){
            if (word.charAt(i) != "a" && word.charAt(i) != "b" && word.charAt(i) != "c" ){
                result+=word.charAt(i);
            }       
        }  
    }
    else {
        result = null;
    }
    return console.log(result);
}
removeABC("Habci")
removeABC("hello")
removeABC("")

