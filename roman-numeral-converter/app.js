function convertToRoman(num) {
    let result = '';
    const dict = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M"
    };
    const dictArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    if (num < 0) {
      return false;
    } else {
      if (num < 4) {
        for (let i = 0; i < num; i++) {
          result = result.concat(dict[1]);
        }
      } else if (num >= 4 && num <= 10){
        if (dict.hasOwnProperty(num)) {
          result = dict[num];
        }
        for (let i = 1; i <= num; i++) {
          if (dict.hasOwnProperty(i)) {
            result = dict[i];
          } else {
            result = result.concat(dict[1]);
          }
        }
      } else {
        let i = dictArr.length - 1;
        //console.log("num: ", num);
        while (i > 0 && num >= 10) {
          if (num % dictArr[i] < num) {
            //console.log("----- new while loop -----");
            //console.log("dictArr[i]", dictArr[i])
            result = result.concat(dict[dictArr[i]]);
            num = num - dictArr[i];
            //console.log("num: ", num);
            //console.log("result: ", result);
          } else {
            i--;
          }
        }
        result = result.concat(convertToRoman(num));
      }
    } 
    return result;
  }
  
  console.log(convertToRoman(9));