let furniture = ['Table', 'Chairs', 'Couch'];
num = 1;

function interator(furniture){
    var num = 1;
    console.log(furniture);
    for (let index = 0 ; index < furniture.length ; index++) {
        console.log(furniture[index]);
        
        for (let char of furniture[index]) {
            console.log( " ",char );
          }
    }
}

interator(furniture);
