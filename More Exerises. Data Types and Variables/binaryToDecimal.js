function binaryToDecimal(binaryNum) {
  let binaryStr = String(binaryNum);
  let decimalValue = 0;

  for (let i = 0; i < 8; i++) {
    if (binaryStr[i] === "1") {
      decimalValue += Math.pow(2, 7 - i);
    }
  }

  console.log(decimalValue);
}
binaryToDecimal("00001001");
binaryToDecimal("11110000");
binaryToDecimal("10111000");
binaryToDecimal("11111100");
