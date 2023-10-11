function passCheck(pass) {;
    let passToArr = pass.split('');
    console.log(passToArr);
    function passLength(pass) {
        let passLength = passToArr.length;
        if (passLength < 6 || passLength > 10){
            console.log("Password must be between 6 and 10 characters");
            return;
        }
    }
    passLength(pass);
    function passSymbols(pass) {
        //need to finish
    }
    passSymbols(pass);
    function passDigitCount(pass) {
        let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        if (passToArr.includes(digits)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    passDigitCount(pass)
}
passCheck('logIn');
passCheck('MyPass123');