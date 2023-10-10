function addAndSubtract(num1, num2, num3) {
    let intermediateResult = 0;
    let finalResult = 0;
    function add(num1, num2) {
        intermediateResult = num1 + num2;
        return intermediateResult;
    }
    add(num1, num2)

    function subtract(intermediateResult, num3) {
        finalResult = intermediateResult - num3;
        return finalResult;
    }
    console.log(subtract(intermediateResult, num3));
}
addAndSubtract(23, 6, 10)