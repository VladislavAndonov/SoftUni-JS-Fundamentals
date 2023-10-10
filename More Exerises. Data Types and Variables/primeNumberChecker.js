function primeNumCheck(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  isPrime === true ? console.log(true) : console.log(false);
}
primeNumCheck(13);
primeNumCheck(8);
primeNumCheck(81);
