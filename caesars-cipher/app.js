function rot13(str) {
    let strArr = [...str];
    for (let i = 0; i < strArr.length; i++) {
      // only the letters
      if (strArr[i].match(/[A-Z]/g)) {
        // in case of overflow
        if (strArr[i].charCodeAt(0) - 13 < 'A'.charCodeAt(0)) {
          strArr[i] = String.fromCharCode('Z'.charCodeAt(0) - (13 - (strArr[i].charCodeAt(0) - 'A'.charCodeAt(0))) + 1);
        } else {
          strArr[i] = String.fromCharCode(strArr[i].charCodeAt(0) - 13);
        }
      } 
    }
    return strArr.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));