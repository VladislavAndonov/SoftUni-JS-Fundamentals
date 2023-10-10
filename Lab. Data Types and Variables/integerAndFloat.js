// function integerAndFloat(firstNum, secondNum, ThirdNum) {
//     let sum = firstNum + secondNum + ThirdNum;
//     let isFloat = false
//     if (sum % 1 !== 0) {
//         isFloat = true
//     }
//     let output = isFloat === true? 'Float': 'Integer'
//     console.log(`${sum} - ${output}`);
// }
// integerAndFloat(9, 100, 1.1)
// integerAndFloat(100, 200, 303)

function intAndFloat(firstNum, secondNum, ThirdNum) {
  let sum = firstNum + secondNum + ThirdNum;
  sum % 1 === 0 ? (sum += " - Integer") : (sum += " - Float");
  console.log(sum);
}
intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);
