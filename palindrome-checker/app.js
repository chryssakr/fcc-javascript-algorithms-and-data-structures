function palindrome(str) {
    let arr = [...str.toLowerCase().match(/[a-z0-9]/g)];
    console.log(arr);
    let isPali = true;
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] != arr[arr.length - 1 - i]) {
        isPali = false;
      }
    }
    console.log(isPali);
    return isPali;
  }
  
  palindrome("1 eye for of 1 eye.");