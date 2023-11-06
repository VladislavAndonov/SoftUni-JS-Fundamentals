function addressBook(arr) {
  let book = {};
  for (let personInfo of arr) {
    let [name, address] = personInfo.split(":");
    book[name] = address;
  }
  let sortedBook = Object.entries(book);
  console.log(sortedBook);
  sortedBook.sort((a, b) => a[0].localeCompare(b[0]));

  for (let person of sortedBook) {
    console.log(`${person[0]} -> ${person[1]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
