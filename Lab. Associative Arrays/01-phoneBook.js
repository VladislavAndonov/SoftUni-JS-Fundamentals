function phoneBook(arr) {
  let obj = {};
  for (let el of arr) {
    let [person, phoneNumber] = el.split(" ");
    obj[person] = phoneNumber;
  }
  let kvps = Object.entries(obj);
  for (let kvp of kvps) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

// phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
