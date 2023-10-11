function palindromeInts(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curNumToString = String(arr[i]);
    function reverseStr(curNumToString) {
      let revStr = curNumToString.split("").reverse().join("");
      function checkNum(revStr) {
        if (revStr == curNumToString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
    checkNum(revStr);
    }
    reverseStr(curNumToString);
}
}
palindromeInts([123, 323, 421, 121]);
palindromeInts([32,2,232,1010]);
