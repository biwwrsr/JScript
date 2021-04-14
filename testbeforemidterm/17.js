function isPandigital(num) {
    num = num.toString();
    console.log(num);
    num1 = num2 = num3 = num4 = num5 = num6 = num7 = num8 = num9 = num0 = 0;
    for (a = 0; a < num.length; a++) {
        console.log(num.charAt(a));
      switch (num.charAt(a)) {
        case '0':
          num0++;
          break;
        case '1':
          num1++;
          break;
        case '2':
          num2++;
          break;
        case '3':
          num3++;
          break;
        case '4':
          num4++;
          break;
        case '5':
          num5++;
          break;
        case '6':
          num6++;
          break;
        case '7':
          num7++;
          break;
        case '8':
          num8++;
          break;
        case '9':
          num9++;
          break;
      }
    }
    if(num0 == 0 ||num1 == 0||num2 == 0||num3 == 0||num4 == 0||num5 == 0
      ||num6 == 0||num7 == 0||num8 == 0||num9 == 0){
          return false;
      }
      else{
          return true;
      }
  }
  
  //console.log(isPandigital(98140723568910));
  //console.log(isPandigital(90864523148909));
  console.log(isPandigital(1122334455667788));