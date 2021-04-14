function additivePersistence(num) {
    num = num.toString();
    ans = 0;
    if (num.length == 1) {
      return null;
    }
    count = 0;
    do {
      if (count == 0) {
        for (a = 0; a < num.length; a++) {
          ans += parseInt(num.charAt(a));
        }
      } else {
        num = ans.toString();
        ans = 0;
        for (a = 0; a < num.length; a++) {
          ans += parseInt(num.charAt(a));      
        }
      }
      count++;
    } while (ans.toString().length != 1);//เป็นเท็จออกลูป
    return ans;
  }
  
  console.log(additivePersistence(1679583));
  console.log(additivePersistence(123456));
  console.log(additivePersistence(529456));
  console.log(additivePersistence(6));