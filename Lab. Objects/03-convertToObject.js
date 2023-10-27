function convertObj(str) {
  let object = JSON.parse(str);

  for (let keys in object) {
    console.log(`${keys}: ${object[keys]}`);
  }
}
convertObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
