function matrix(n) {
  let result = [];
  function rowLength(n) {
    for (let i = 0; i < n; i++) {
      result.push(n);
    }
    return result;
  }
  rowLength(n);

  function rowsCount(n) {
    for (let j = 0; j < n; j++) {
      console.log(result.join(" "));
    }
  }
  rowsCount(n);
}
matrix(3);
matrix(7);
