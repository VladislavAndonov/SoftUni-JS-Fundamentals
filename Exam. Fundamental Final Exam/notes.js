// // Adding values in object + nested object

// let obj = {};

// let key = "keyName";
// let nestedKeyOne = "nestedValueOne";
// let nestedKeyTwo = "nestedValueTwo";

// obj[key] = { nestedKeyOne, nestedKeyTwo };

// console.log(obj);

// // Regexp - global flag (when more than one match in single string)

// let pattern = /([=\/])(?<destination>[A-Z][a-zA-Z]{2,})\1/g;

// let match = pattern.exec(str);

// while (match != null) {
//   destinations.push(match.groups.destination);
//   match = pattern.exec(str);
// }

// // Regexp - no global flag (matches are in separate strings)

// let line = purchases.shift();

// while (line != "Purchase") {
//   let match = line.match(pattern);

//   if (match != null) {
//     let { name, price, qty } = match.groups;
//     items.push(name);
//     totalSpent += Number(price) * Number(qty);
//   }

//   line = purchases.shift();
// }

