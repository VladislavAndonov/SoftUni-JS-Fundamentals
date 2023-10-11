function vacation(peopleCount, groupType, dayOfWeek) {
  let priceForGroup = 0;
  if (groupType === "Students") {
    switch (dayOfWeek) {
      case "Friday":
        priceForGroup = peopleCount * 8.45;
        break;
      case "Saturday":
        priceForGroup = peopleCount * 9.8;
        break;
      case "Sunday":
        priceForGroup = peopleCount * 10.46;
        break;
    }
  } else if (groupType === "Business") {
    switch (dayOfWeek) {
      case "Friday":
        priceForGroup = peopleCount * 10.9;
        break;
      case "Saturday":
        priceForGroup = peopleCount * 15.6;
        break;
      case "Sunday":
        priceForGroup = peopleCount * 16;
        break;
    }
  } else if (groupType === "Regular") {
    switch (dayOfWeek) {
      case "Friday":
        priceForGroup = peopleCount * 15;
        break;
      case "Saturday":
        priceForGroup = peopleCount * 20;
        break;
      case "Sunday":
        priceForGroup = peopleCount * 22.5;
        break;
    }
  }
  if (groupType === "Students" && peopleCount >= 30) {
    priceForGroup *= 0.85;
  } else if (groupType === "Business" && peopleCount >= 100) {
    let priseForPerson = priceForGroup / peopleCount;
    priceForGroup = (peopleCount - 10) * priseForPerson;
  } else if (
    groupType === "Regular" &&
    peopleCount >= 10 &&
    peopleCount <= 20
  ) {
    priceForGroup *= 0.95;
  }
  console.log(`Total price: ${priceForGroup.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(120, "Business", "Sunday");
