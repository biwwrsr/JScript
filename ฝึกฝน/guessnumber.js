console.log("\n*********** Program Game Guess Number *************\n");
num = Math.floor(Math.random() * 20) + 1;
let input = "";

function guessnumber(input){
        console.log("You guess number is : "+ input + "\n");
    if (input == num) {
			done = false;
			console.log("Lucky!!!!! \n");
			console.log("You got 1,000,000 bath \n");
			}
		else {
            console.log("This is wrong number");
            if (input > num){
               console.log(" ! more than");
            }
            else if (input < num){
                 console.log(" ! less than");
                }
        }
        return("\nThe correct number is : " + num + "\n");
}

console.log(guessnumber(5)); //input number


