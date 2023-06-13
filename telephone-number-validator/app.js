function telephoneCheck(str) {
  // if it has anything else than 0-9, () and - => invalid

  let strArr = str.match(/[\d\(\)\-]/g);
  console.log(strArr);

  // if it starts with - => invalid
  // if it starts and ends with ( and ) => invalid
  if (strArr[0] === "-") {
    return false;
  }
  if (strArr[0] === "(" && strArr[strArr.length - 1] === ")") {
    return false;
  }

  // if it has less than 10 digits => invalid
  if (str.match(/[0-9]/g).length < 10) {
    return false;
  } else if (str.match(/[0-9]/g).length > 11) {
    return false;
  }

  // if it has country code and it isn't 1 => invalid
  if (str.match(/[0-9]/g).length === 11 && str.match(/[0-9]/g)[0] != 1) {
    return false;
  }

  let openRightPar = 0;
  let openLeftPar = 0;
  let dashCount = 0;
  // open parenthesis => right par != left par => invalid
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "(") {
      openLeftPar++;
    } else if (strArr[i] === ")" && !openRightPar) {
      openRightPar++;
    }
    if (strArr[i] === "-") {
      dashCount++;
    }
  }
  if (openRightPar != openLeftPar) {
    return false;
  }
  if (dashCount > 2) {
    return false;
  }
  return true;
}

console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("123**&!!asdf#"));
