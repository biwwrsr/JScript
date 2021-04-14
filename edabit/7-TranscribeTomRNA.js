function dnaToRna(dna) {
	var arr = dna.split("");
	return arr.map((item,index) => {
    if (item==="A") {
		return "U";
    }else if(item==="T"){
			return "A";
	}else if(item==="G"){
			return "C";
	}else if(item==="C"){
			return "G";
	}
  }).join("");
}
console.log(dnaToRna("ATTAGCGCGATATACGCGTAC"))
console.log(dnaToRna("CGATATA"))
console.log(dnaToRna("GTCATACGACGTA"))