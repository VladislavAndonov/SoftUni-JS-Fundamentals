function equalSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sumBefore = 0;
    let sumAfter = 0;
    for (let j = 0; j < i; j++) {
      sumBefore += arr[j];
    }
    for (let n = i + 1; n < arr.length; n++) {
      sumAfter += arr[n];
    }
    if (sumBefore === sumAfter) {
      console.log(i);
      return;
    }
  }
  console.log("no");
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
