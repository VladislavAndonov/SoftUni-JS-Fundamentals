function replaceRepeating(str) {
  let newStr = [str[0]];
  let curChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== curChar) {
      newStr.push(str[i]);
      curChar = str[i];
    }
  }
  console.log(newStr.join(""));
}
replaceRepeating("aaaaabbbbbcdddeeeedssaa");
