function employees(arr) {
  for (let employee of arr) {
    let employeesObj = {
      employee: employee,
      personalNum: employee.length,
    };
    console.log(
      `Name: ${employeesObj.employee} -- Personal Number: ${employeesObj.personalNum}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
