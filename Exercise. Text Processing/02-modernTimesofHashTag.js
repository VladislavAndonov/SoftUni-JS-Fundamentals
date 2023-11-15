function hashTag(text) {
  let words = text.split(" ");
  let specialWords = words.filter(word => word.startsWith("#") && word.length > 1);
  specialWords = specialWords.map(word => word.slice(1));

  for (let i = 0; i < specialWords.length; i++){
    let word = specialWords[i];
    let isValid = true;
    for (let char of word){
      if (!/[A-Za-z]/.test(char)){
      isValid = false;
      break;
      }
    }
    if (isValid){
      console.log(word)
    }
  }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
