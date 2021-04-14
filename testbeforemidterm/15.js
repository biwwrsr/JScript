function starRating(arr) {
    Total = 0;
    TotalPeople = 0;
    for (a = 0; a < arr.length; a++) {
      TotalPeople += arr[a];
      switch (a) {
        case 0:
          Total += arr[a] * 1;
          break;
        case 1:
          Total += arr[a] * 2;
          break;
        case 2:
          Total += arr[a] * 3;
          break;
        case 3:
          Total += arr[a] * 4;
          break;
        case 4:
          Total += arr[a] * 5;
          break;
      }
    }
    star = "";
    Ave = (Total / TotalPeople).toFixed(2);
    if(Ave *10 %10 <5){
      for(n = 0;n < Math.floor(Ave);n++){
          star += "*";
      }
    }else{
        
      for(n = 0;n <= Math.floor(Ave);n++){
          star += "*";
      }
    }
    ans = "["+Ave+"] "+star;
    return ans;
  }
  
  console.log(starRating([55, 67, 98, 115, 61]));
  console.log(starRating([0, 2, 0, 1, 23]));
  console.log(starRating([16, 17, 23, 40, 45]));
  console.log(starRating([0, 0, 0, 0, 5]));