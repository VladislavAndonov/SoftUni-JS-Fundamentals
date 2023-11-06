function grades(arr) {
  let classbook = {};

  for (let el of arr) {
    let curGrades = el.split(" ");
    let name = curGrades.shift();
    let sumGrades = 0;
    let numGrades = 0;

    for (let grade of curGrades) {
      sumGrades += Number(grade);
      numGrades++;
    }

    let avgGrade = (sumGrades / numGrades).toFixed(2);

    if (name in classbook) {
      classbook[name].push(avgGrade);
    } else {
      classbook[name] = [avgGrade];
    }
  }

  let studentNames = Object.keys(classbook).sort();

  for (let name of studentNames) {
    let total = 0;
    for (let grade of classbook[name]) {
      total += Number(grade);
    }
    let averageGrade = (total / classbook[name].length).toFixed(2);
    console.log(`${name}: ${averageGrade}`);
  }
}
grades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
