// function leapYear(year) {
//   let leapYear = true;
//   if (year % 4 === 0 && year % 100 !== 0) {
//     leapYear = true;
//   } else if (year % 400 === 0) {
//     leapYear = true;
//   } else {
//     leapYear = false;
//   }
//   if (leapYear === true) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }
// leapYear(1904);
// leapYear(1600);

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
leapYear(1904);
leapYear(1600);
