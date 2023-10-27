function convertJSON(firstName, lastName, hairColor) {
  let person = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };
  let str = JSON.stringify(person);
  console.log(str);
}
convertJSON("George", "Jones", "Brown");
