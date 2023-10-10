function formatGrade(grade) {
  let expression = "";
  if (grade < 3.0) {
    console.log("Fail (2)");
  } else {
    if (grade < 3.5) {
      expression = "Poor";
    } else if (grade < 4.5) {
      expression = "Good";
    } else if (grade < 5.5) {
      expression = "Very good";
    } else if (grade >= 5.5) {
      expression = "Excellent";
    }
    console.log(`${expression} (${grade.toFixed(2)})`);
  }
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
