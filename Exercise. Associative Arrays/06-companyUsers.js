function companyUsers(arr) {
  let companies = {};
  for (let line of arr) {
    let [company, employee] = line.split(" -> ");

    if (company in companies) {
      companies[company].push(employee);
    } else {
      companies[company] = [employee];
    }
  }
  let sortedCompanies = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let [company, employee] of sortedCompanies) {
    console.log(company);
    let uniqueEmployees = new Set(employee);
    for (let entry of uniqueEmployees) {
      console.log(`-- ${entry}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
