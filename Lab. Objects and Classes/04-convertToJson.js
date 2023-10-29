function convertJson(firstName, lastName, hairColor) {
  let person = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };
  let str = JSON.stringify(person);
  console.log(str);
}
convertJson("George", "Jones", "Brown");
