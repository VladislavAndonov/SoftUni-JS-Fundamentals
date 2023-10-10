function revString(word) {
  let output = "";
  for (let i = word.length - 1; i >= 0; i--) {
    output += word[i];
  }
  console.log(output);
}
revString("Hello");
revString("SoftUni");
revString("1234");
