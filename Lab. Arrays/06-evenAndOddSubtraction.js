function evenAndOddSubtract(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  console.log(sumEven - sumOdd);
}
evenAndOddSubtract([1, 2, 3, 4, 5, 6]);
evenAndOddSubtract([3, 5, 7, 9]);
evenAndOddSubtract([2, 4, 6, 8, 10]);
