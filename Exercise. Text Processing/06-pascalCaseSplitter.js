function pascalCase(str) {
  let splitWords = [];

  while (str.length > 0) {
    let idx;
    for (idx = 0; idx < str.length; idx++) {
      if (/[A-Z]/.test(str[idx])) {
        let word = str.slice(0, idx);
        if (word.length > 0) {
          splitWords.push(word);
          str = str.slice(idx);
          break;
        }
      }
    }
    if (idx === str.length) {
      splitWords.push(str);
      str = "";
    }
  }
  console.log(splitWords.join(", "));
}
pascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
