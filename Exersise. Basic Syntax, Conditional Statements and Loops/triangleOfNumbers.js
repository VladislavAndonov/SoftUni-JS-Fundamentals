function triangleOfNums(n) {
  let curNum = 1;
  while (curNum <= n) {
    let curRow = "";
    let digitsPerLine = 1;
    while (digitsPerLine <= curNum) {
      curRow += curNum + " ";
      digitsPerLine++;
    }
    console.log(curRow);
    curNum++;
  }
}
triangleOfNums(5);
