function maxSeqEqualEls(arr) {
  let longestSeq = [];
  let curSeq = [];
  let curSeqCount = 0;
  let longestSeqCount = 0;
  for (let i = 0; i < arr.length; i++) {
    curSeq.push(arr[i]);
    curSeqCount++;
    if (arr[i] !== arr[i + 1]) {
      if (curSeqCount > longestSeqCount) {
        longestSeq = curSeq;
        longestSeqCount = curSeqCount;
      }
      curSeq = [];
      curSeqCount = 0;
    }
  }
  console.log(longestSeq.join(" "));
}
maxSeqEqualEls([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeqEqualEls([1, 1, 1, 2, 3, 1, 3, 3]);
maxSeqEqualEls([4, 4, 4, 4]);
maxSeqEqualEls([0, 1, 1, 5, 2, 2, 6, 3, 3]);