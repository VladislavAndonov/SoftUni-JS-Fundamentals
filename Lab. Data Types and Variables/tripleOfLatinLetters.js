function tripleLatinLetters(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      for (let n = 0; n < num; n++) {
        let letter1 = String.fromCharCode(97 + i);
        let letter2 = String.fromCharCode(97 + j);
        let letter3 = String.fromCharCode(97 + n);
        result.push(letter1 + letter2 + letter3);
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}
tripleLatinLetters("3");
