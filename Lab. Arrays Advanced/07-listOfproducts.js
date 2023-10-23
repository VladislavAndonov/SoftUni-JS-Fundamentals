function arrangeList(list) {
  let sortedList = list.sort((a, b) => a.localeCompare(b));
  console.log(sortedList);
}
arrangeList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
