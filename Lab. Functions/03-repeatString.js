function repeatStr(string, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
}
console.log(repeatStr("abc", 3));
console.log(repeatStr("String", 2));
