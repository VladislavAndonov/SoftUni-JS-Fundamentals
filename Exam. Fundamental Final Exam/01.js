function changeStr(arr) {
  let str = arr.shift();

  let command = arr.shift();

  while (command != "Done") {
    let tokens = command.split(" ");

    if (tokens[0] == "Change") {
      str = str.replace(new RegExp(tokens[1], "g"), tokens[2]);
      console.log(str);
    } else if (tokens[0] == "Includes") {
      if (str.includes(tokens[1])) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (tokens[0] == "End") {
      if (str.endsWith(tokens[1])) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (tokens[0] == "Uppercase") {
      str = str.toUpperCase();
      console.log(str);
    } else if (tokens[0] == "FindIndex") {
      let idx = str.indexOf(tokens[1]);
      console.log(idx);
    } else if (tokens[0] == "Cut") {
      let startIdx = Number(tokens[1]);
      let length = Number(tokens[2]);
      let cuttedChars = str.slice(startIdx, startIdx + length);
      console.log(cuttedChars);
    }

    command = arr.shift();
  }
}
changeStr([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
