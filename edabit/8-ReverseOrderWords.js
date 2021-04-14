function reverse(str) {
	var arr = str.split(" ");
    for (i=0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = arr[i].split("").reverse().join("");
        }
    }
  return arr.join(" ");
}
console.log(reverse("Reverse"))
console.log(reverse("This is a typical sentence."))
console.log(reverse("The dog is big."))