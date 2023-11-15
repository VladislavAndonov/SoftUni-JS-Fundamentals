function substring(word, sentence) {
  let sentenceArr = sentence.toLowerCase().split(" ");
  if (sentenceArr.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
substring("javascript", "JavaScript is the best programming language");
