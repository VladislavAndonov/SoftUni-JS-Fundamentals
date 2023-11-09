function oddOccurrences(str) {
  let arr = str.split(" ");
  let lowerCaseArr = arr.map((el) => el.toLowerCase());
  let uniqueWords = new Set(lowerCaseArr);
  let objOfUniques = {};

  for (let el of uniqueWords) {
    objOfUniques[el] = 0;
  }

  for (let el of lowerCaseArr) {
    if (el in objOfUniques) {
      objOfUniques[el]++;
    }
  }

  let oddWords = [];

  for (let word in objOfUniques) {
    if (objOfUniques[word] % 2 !== 0) {
      oddWords.push(word);
    }
  }

  console.log(oddWords.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
