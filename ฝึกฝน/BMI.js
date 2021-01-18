function calBMI(BMI){
    text = "";
    console.log(BMI);
    if(BMI <= 18.50){
         text += "Your thin than people.";
    }
    else if (BMI >= 18.50 && BMI <= 22.90){
        text +="You normal.";
    }
    else if (BMI >= 23 && BMI <= 24.90){
        text +="You fat level 1";
    }
    else if (BMI >= 25 && BMI <= 29.90){
        text +="You fat level 2.";
    }
    else{
        text +="You very fat.";
    }
    return text;
}

let w = 50;
let h = 1.63;
var BMI = w/(h*h)
console.log(calBMI(BMI));

