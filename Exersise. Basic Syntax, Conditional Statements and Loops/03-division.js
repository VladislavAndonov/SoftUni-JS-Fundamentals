function division(num) {
  let divisor = 1;
  if (num % 10 === 0) {
    divisor = 10;
  } else if (num % 7 === 0) {
    divisor = 7;
  } else if (num % 6 === 0) {
    divisor = 6;
  } else if (num % 3 === 0) {
    divisor = 3;
  } else if (num % 2 === 0) {
    divisor = 2;
  } else {
    console.log("Not divisible");
    return;
  }
  console.log(`The number is divisible by ${divisor}`);
}
division(30);
division(15);
division(12);
division(1643);
