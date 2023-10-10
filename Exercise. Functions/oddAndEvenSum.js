function oddAndEvenSum(num) {
  let numToString = String(num);
  let arr = [];
  let evenSum = 0;
  let oddSum = 0;
  
  function iterate(numToString) {
    for (let i = 0; i < numToString.length; i++)
      arr.push(Number(numToString[i]));
  }
  iterate(numToString);

  function oddOrEven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        evenSum += arr[i];
      } else {
        oddSum += arr[i];
      }
    }
  }
  oddOrEven(arr);

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
