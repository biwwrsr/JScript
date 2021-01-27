function criticalCode(){
    throw "throw an excepion";
}

function logError(theException){
    console.log(theException);
}


console.log("\n******Try...Catch******\n");

try{
    criticalCode();
}catch (ex) {
    console.log("Got an error");
    logError(ex);
}


console.log("\n******Trowing in Try..catch******\n");

try{
throw"An except";
}catch (ex) {
    console.log("Got an error");
    logError(ex);
}


console.log("\n******Try..catch..Finally******\n");

try{
    criticalCode();
}catch (ex) {
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("Code that always will run");
}
function hello(){
    console.log("\n*********Throwing Exceotions*******");
}
