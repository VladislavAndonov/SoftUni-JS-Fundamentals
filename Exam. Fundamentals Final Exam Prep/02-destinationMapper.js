function travel(str) {
  let travelPoints = 0;
  let destinations = [];

  let pattern = /([=\/])(?<destination>[A-Z][a-zA-Z]{2,})\1/g;

  let match = pattern.exec(str);

  while (match != null) {
    destinations.push(match.groups.destination);
    match = pattern.exec(str);
  }

  if (destinations.length > 0) {
    travelPoints = destinations.reduce((sum, dest) => sum + dest.length, 0);
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
  } else {
    console.log("Destinations:");
    console.log("Travel Points: 0");
  }
}
travel("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");