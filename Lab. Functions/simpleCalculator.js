// function simpleCalc(num1, num2, operator) {
//     let result = '';
//     let operations = (operator) => {
//         switch (operator) {
//             case 'add':
//                 result = num1 + num2;
//                 break;
//             case 'subtract':
//                 result = num1 - num2;
//                 break;
//             case 'multiply':
//                 result = num1 * num2;
//                 break;
//             case 'divide':
//                 result = num1 / num2;
//                 break;
//         }
//         return result;
//     }
//     console.log(operations(operator));
// }
// simpleCalc(5, 5, 'multiply')

function simpleCalc(num1, num2, operator) {
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;

    if (operator == 'add') {
        console.log(add(num1, num2));
    } else if (operator == 'subtract') {
        console.log(subtract(num1, num2));
    } else if (operator == 'multiply') {
        console.log(multiply(num1, num2));
    } else if (operator == 'divide') {
        console.log(divide(num1, num2));
    }

}
simpleCalc(5, 5, 'multiply')