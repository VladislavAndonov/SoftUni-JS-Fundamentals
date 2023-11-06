function meetings(arr) {
  let schedule = {};
  for (let meeting of arr) {
    let [dayOfWeek, person] = meeting.split(" ");

    if (dayOfWeek in schedule) {
      console.log(`Conflict on ${dayOfWeek}!`);
    } else {
      schedule[dayOfWeek] = person;
      console.log(`Scheduled for ${dayOfWeek}`);
    }
  }
  let kvps = Object.entries(schedule);
  for (let kvp of kvps) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
