function commonEls(arr1, arr2) {
  for (let el of arr1) {
    if (arr2.includes(el)) {
      console.log(el);
    }
  }
}
commonEls(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonEls(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
