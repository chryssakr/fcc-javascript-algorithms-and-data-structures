function checkCashRegister(price, cash, cid) {
  let changeAmount = cash - price;
  let cidSum = 0;
  for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }
  let getChangeRes = getChange(changeAmount, cid);
  //console.log("in main", getChangeRes, "0", getChangeRes[0], "1", getChangeRes[1]);
  if (cidSum < changeAmount || getChangeRes[1] === false) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } 
  
  if (cidSum === changeAmount) {
    let closedRegister = [];
    for (let i = 0; i < getChangeRes[0].length; i++) {
      closedRegister[i] = getChangeRes[0][getChangeRes[0].length - 1 - i];
    }
    console.log("closed reg", closedRegister);
    return {status: "CLOSED", change: closedRegister};
  }
  //console.log(cidSum, changeAmount) // DELETE
  return {status: "OPEN", change: getChangeRes[0]};
}






function getChange(changeAmount, cid) {
  let changeArr = [];
  let currencyDict = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  //console.log(currencyDict); // DELETE
  //console.log("changeAmount |", "cash registry cid[i][1] |", "currencyDict[cid[i][0]]");

  let j = 0;
  for (let i = cid.length - 1; i >= 0; i--) {
    //console.log(changeAmount, cid[i][1], "in currency:", currencyDict[cid[i][0]])
    //console.log(changeAmount)
    //console.log("currency", currencyDict[cid[i][0]]);
    // multiplying with 100 to avoid rounding errors with two decimals
    let timesFitting = parseInt((100 * changeAmount) / (100 * currencyDict[cid[i][0]]));
    //console.log("tf", timesFitting);
    if (cid[i][1] === 0) {
      changeArr[j] = [cid[i][0], 0];
      j++;
      continue;
    }
    if (timesFitting > 0 && changeAmount > 0) {
      if (currencyDict[cid[i][0]] * timesFitting <= cid[i][1]) {
        changeArr[j] = [cid[i][0], currencyDict[cid[i][0]] * timesFitting];
        cid[i][1] -= currencyDict[cid[i][0]] * timesFitting;
      } else {
        changeArr[j] = [cid[i][0], cid[i][1]];
        cid[i][1] = 0;
      }
      //console.log("amount to subtract", changeArr[j][1]);
      changeAmount = (changeAmount - changeArr[j][1]).toFixed(2);
      //console.log("changeAmount", changeAmount);
      j++
    }
  }
  //console.log(changeAmount)
  console.log(changeArr);
  let statusOk = true;
  if (changeAmount > 0) {
    statusOk = false;
  }
  return [changeArr, statusOk];
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
