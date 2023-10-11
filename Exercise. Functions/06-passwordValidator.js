function passCheck(pass) {
  let passToArr = pass.split("");
  let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let isValid = true;

  function passLength() {
    let passLength = passToArr.length;
    if (passLength < 6 || passLength > 10) {
      console.log("Password must be between 6 and 10 characters");
      isValid = false;
      return;
    }
  }
  passLength();

  function passSymbols() {
    let passToLowerCase = pass.toLowerCase();
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let allowedSymbols = letters.concat(digits);
    for (let i = 0; i < passToLowerCase.length; i++) {
      if (!allowedSymbols.includes(passToLowerCase[i])) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
        return;
      }
    }
  }
  passSymbols();

  function passDigitCount() {
    let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let digitsCount = 0;

    for (let i = 0; i < pass.length; i++) {
      if (digits.includes(pass[i])) {
        digitsCount++;
      }
    }
    if (digitsCount < 2) {
      console.log("Password must have at least 2 digits");
      isValid = false;
    }
  }
  passDigitCount();
  if (isValid === true) {
    console.log("Password is valid");
  }
}
passCheck("logIn");
passCheck("MyPass123");
passCheck("Pa$s$s");
