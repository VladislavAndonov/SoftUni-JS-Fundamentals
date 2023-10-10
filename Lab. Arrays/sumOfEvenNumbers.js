/*
function sumOfEvenNumbers(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        let curStringToNum = Number(arr[i]);
        if (curStringToNum % 2 === 0){
            result += curStringToNum;
        }
    }
    console.log(result);
}
sumOfEvenNumbers(['1','2','3','4','5','6'])
sumOfEvenNumbers(['3','5','7','9'])
sumOfEvenNumbers(['2','4','6','8','10'])
*/

function sumEvenNums(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0){
            result += arr[i];
        }
    }
    console.log(result);
}
sumEvenNums(['1','2','3','4','5','6'])
sumEvenNums(['3','5','7','9'])
sumEvenNums(['2','4','6','8','10'])