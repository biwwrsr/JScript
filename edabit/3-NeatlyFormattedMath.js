function formatMath(expr) {
	var copy = expr.split(" ");
	var res= parseInt(copy[0]);
	var ress = parseInt(copy[2]);
	if(copy[1]=="+"){
		return expr+" = "+(res+ress);
	}
	if(copy[1]=="-"){
		return expr+" = "+(res-ress);
	}
	if(copy[1]=="x"){
		return expr+" = "+(res*ress);
	}
	if(copy[1]=="/"){
		return expr+" = "+(res/ress);
	}
}
console.log(formatMath("3 + 4"))
console.log(formatMath("3 - 2"))
console.log(formatMath("4 x 5"))
console.log(formatMath("6 / 3"))
