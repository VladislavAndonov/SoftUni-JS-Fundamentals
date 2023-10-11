function reverseStr(word) {
  let output = "";
  for (let i = word.length - 1; i >= 0; i--) {
    output += word[i];
  }
  console.log(output);
}
reverseStr("Hello");
reverseStr("SoftUni");
reverseStr("1234");
