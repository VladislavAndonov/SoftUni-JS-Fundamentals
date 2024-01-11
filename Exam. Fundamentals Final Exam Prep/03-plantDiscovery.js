// function plantDiscovery(arr) {
//   let n = Number(arr.shift());
//   let plants = {};
//   for (let i = 0; i < n; i++) {
//     let curPlant = arr.shift();

//     let tokens = curPlant.split("<->");

//     if (tokens[0] in plants) {
//       plants[tokens[0]] = tokens[1];
//     } else {
//       plants[tokens[0]] = tokens[1];
//     }
//   }

//   let command = arr.shift();

//   while (command != "Exhibition") {
//     let tokens = command.split(" ");

//     if (tokens[0] == "Rate:") {
//       if (tokens[1] in plants) {
//         //to finish
//       } else {
//         console.log("error");
//       }
//     } else if (tokens[0] == "Update:") {
//       if (tokens[1] in plants) {
//         plants[tokens[1]] = tokens[3];
//       } else {
//         console.log("error");
//       }
//     } else if (tokens[0] == "Reset:") {
//       if (tokens[1] in plants) {
//         //to finish
//       } else {
//         console.log("error");
//       }
//     }

//     command = arr.shift();
//   }
//   console.log("Plants for the exhibition:");
//   //to finish
// }
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);

function plantDiscovery(arr) {
  let n = Number(arr.shift());
  let plants = {};

  for (let i = 0; i < n; i++) {
    let [plant, rarity] = arr.shift().split("<->");
    plants[plant] = { rarity: Number(rarity), ratings: [] };
  }
  let command = arr.shift();

  while (command != "Exhibition") {
    let tokens = command.split(" ");

    if (tokens[0] == "Rate:") {
      if (tokens[1] in plants) {
        plants[tokens[1]].ratings.push(Number(tokens[3]))
      } else {
        console.log("error");
      }
    } else if (tokens[0] == "Update:") {
      if (tokens[1] in plants) {
        plants[tokens[1]].rarity = Number(tokens[3]);
      } else {
        console.log("error");
      }
    } else if (tokens[0] == "Reset:") {
      if (tokens[1] in plants) {
        plants[tokens[1]].ratings = [];
      } else {
        console.log("error");
      }
    }

    command = arr.shift();
  }
  console.log("Plants for the exhibition:");
  
}
