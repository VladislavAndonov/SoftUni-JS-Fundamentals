function numSearch(arrOfEls, workingParams) {
  let [elsCount, elsToDelete, searchedEl] = workingParams;
  let countedEls = arrOfEls.splice(0, elsCount);
  countedEls.splice(0, elsToDelete);
  let searchedElCount = 0;
  for (let el of countedEls) {
    if (el == searchedEl) {
      searchedElCount++;
    }
  }
  console.log(`Number ${searchedEl} occurs ${searchedElCount} times.`);
}
numSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]);
numSearch([7, 1, 5, 8, 2, 7], [3, 1, 5]);