function spliceTest(arr) {
  console.log("removing first 3 elements");
  let removedFirst = arr.splice(0, 3);
  console.log(arr);

  console.log("\ninserting back the initial first 3 elements");
  arr.unshift(...removedFirst);
  console.log(arr);

  console.log("\nremoving last 3 elements");
  let removedLast = arr.splice(-3, 3);
  console.log(arr);

  console.log("\ninserting back the initial last 3 elements");
  arr.push(...removedLast);
  console.log(arr);

  console.log("\nremoving all elements from index 3 to the end of the array");
  let removedAfter3 = arr.splice(3);
  console.log(arr);

  console.log("\ninserting back all elements in their places");
  arr.push(...removedAfter3);
  console.log(arr);

  console.log("\nremoving 3 elements starting from index 3");
  let intermediateEls = arr.splice(3, 3);
  console.log(arr);

  console.log("\ninserting back the 3 intermediate elements in their places");
  arr.splice(3, 0, ...intermediateEls);
  console.log(arr);

  console.log("\nremove first 3 elements and insert the last 3 in their places");
  let removedLast3Els = arr.splice(-3);
  arr.splice(0, 3, ...removedLast3Els);
  console.log(arr);
}
spliceTest([1, 2, 3, 4, 5, 6, 7, 8, 9]);
