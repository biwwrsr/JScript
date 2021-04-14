function keysAndvalues(obj){
    ans = [];
    ans.push(Object.keys(obj));
    ans.push(Object.values(obj));
	return ans;

}
keysAndvalues({a: 1,b: 2, c:3})
keysAndvalues({a: "Apple", b: "Microsoft", c: "Google"})
keysAndvalues({ key1: true, key2: false, key3: undefined})