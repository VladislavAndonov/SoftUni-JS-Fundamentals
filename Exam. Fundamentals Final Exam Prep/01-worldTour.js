function worldTour(arr) {
  let stops = arr.shift();
  let command = arr.shift();
  while (command != "Travel") {
    let tokens = command.split(":");

    if (tokens[0] == "Add Stop") {
      let idx = Number(tokens[1]);
      if (idx < stops.length) {
        stops = stops.slice(0, idx) + tokens[2] + stops.slice(idx);
      }
      console.log(stops);
    } else if (tokens[0] == "Remove Stop") {
      let idx1 = Number(tokens[1]);
      let idx2 = Number(tokens[2]);

      if (idx1 < stops.length && idx2 < stops.length) {
        stops = stops.slice(0, idx1) + stops.slice(idx2 + 1);
      }
      console.log(stops);
    } else if (tokens[0] == "Switch") {
      let oldStop = tokens[1];
      let newStop = tokens[2];

      if (stops.includes(oldStop)) {
        stops = stops.split(oldStop).join(newStop);
      }
      console.log(stops);
    }

    command = arr.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
