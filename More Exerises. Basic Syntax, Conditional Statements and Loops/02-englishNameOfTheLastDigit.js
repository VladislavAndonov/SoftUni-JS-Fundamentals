function lastDigitName(num) {
  let numToString = String(num);
  let lastDigit = "";
  for (let i = numToString.length - 1; i >= 0; i--) {
    lastDigit = numToString[i];
    break;
  }
  switch (lastDigit) {
    case "1":
      console.log("one");
      break;
    case "2":
      console.log("two");
      break;
    case "3":
      console.log("three");
      break;
    case "4":
      console.log("four");
      break;
    case "5":
      console.log("five");
      break;
    case "6":
      console.log("six");
      break;
    case "7":
      console.log("seven");
      break;
    case "8":
      console.log("eight");
      break;
    case "9":
      console.log("nine");
      break;
    case "0":
      console.log("zero");
      break;
  }
}
lastDigitName(512);
lastDigitName(1);
lastDigitName(1643);
