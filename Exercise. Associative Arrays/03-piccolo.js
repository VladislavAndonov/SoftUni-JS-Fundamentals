function piccolo(arr) {
  let parking = new Set();

  for (let el of arr) {
    let [direction, carNum] = el.split(", ");
    if (direction == "IN") {
      parking.add(carNum);
    } else if (direction == "OUT") {
      parking.delete(carNum);
    }
  }
  let parkingArr = [];
  for (let el of parking) {
    parkingArr.push(el);
  }
  let sortedArr = parkingArr.sort((a, b) => a.localeCompare(b));

  if (sortedArr.length > 0) {
    console.log(sortedArr.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
