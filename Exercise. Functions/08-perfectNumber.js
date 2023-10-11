function perfectNum(num) {
  let sum = 0;
  let divisors = [];

  function getDivisors(num) {
    for (let i = 1; i <= num / 2; i++) {
      if (num % i == 0) {
        divisors.push(i);
      }
    }

    function sumCheck(divisors) {
      for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
      }
      if (sum === num) {
        console.log("We have a perfect number!");
      } else {
        console.log("It's not so perfect.");
      }
    }
    sumCheck(divisors);
  }
  getDivisors(num);
}
perfectNum(6);
perfectNum(28);
perfectNum(496);
perfectNum(1236498);
