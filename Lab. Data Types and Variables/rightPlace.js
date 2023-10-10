function rightPlace(word, char, match) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== "_") {
      newWord += word[i];
    } else {
      newWord += char;
    }
  }
  if (newWord === match) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
