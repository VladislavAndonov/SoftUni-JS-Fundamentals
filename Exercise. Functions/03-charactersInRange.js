function charsInRange(sym1, sym2) {
  let code1 = sym1.charCodeAt(0);
  let code2 = sym2.charCodeAt(0);
  let minCode = Math.min(code1, code2);
  let maxCode = Math.max(code1, code2);
  let result = "";

  for (let i = minCode + 1; i < maxCode; i++) {
    result += `${String.fromCharCode(i)} `;
  }

  console.log(result);
}
charsInRange("d", "a");
charsInRange("C", "#");
