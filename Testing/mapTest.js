function mapTest(arr) {
  let powerBy2 = arr.map((el) => el * 2);
  console.log(powerBy2);

  let toString = arr.map(String);
  console.log(toString);
}
mapTest([1, 2, 3, 4, 5]);
