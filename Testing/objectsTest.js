function test() {
  let person = {
    name: "Peter",
    age: 23,
    hairColor: "brown",
  };
//add property in object
  let height = "height"
  person[height] = 183;

// iterate with for of
  let kvp = Object.entries(person);

  for (let entry of kvp) {
    console.log(`${entry[0]} -> ${entry[1]}`);
  }
  
// iterate with for in
  for (let key in person) {
    console.log(`${key} -> ${person[key]}`);
  }
}
test();
