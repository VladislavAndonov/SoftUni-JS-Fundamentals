function reqReading(curBookPages, pagesPerHour, days) {
  let totalTime = curBookPages / pagesPerHour;
  let hoursPerDay = totalTime / days;

  console.log(hoursPerDay);
}
reqReading(212, 20, 2);
