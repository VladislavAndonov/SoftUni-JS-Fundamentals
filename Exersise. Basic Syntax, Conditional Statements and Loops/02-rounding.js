function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }
  let roundedNum = num.toFixed(precision);
  let trailingZeroNum = parseFloat(roundedNum);
  console.log(`${trailingZeroNum}`);
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
