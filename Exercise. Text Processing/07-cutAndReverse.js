function cutAndReverse(str) {
  let reversedStr = str.split("").reverse().join("");

  let middleIdx = reversedStr.length / 2;
  let leftHalf = reversedStr.substring(0, middleIdx);
  let rightHalf = reversedStr.substring(middleIdx);

  console.log(rightHalf);
  console.log(leftHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
