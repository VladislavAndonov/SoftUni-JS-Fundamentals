function dictionary(arr) {
  let dictionary = {};
  for (let el of arr) {
    let info = JSON.parse(el);
    for (let [term, definition] of Object.entries(info)) {
      dictionary[term] = definition;
    }
  }
  let sortedTerms = Object.keys(dictionary).sort();

  for (let term of sortedTerms) {
    let definition = dictionary[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the publicon a fixed route and for afare."}',
  '{"Boiler":"A fuel-burningapparatus or container forheating water."}',
  '{"Tape":"A narrow strip ofmaterial, typically used to holdor fasten something."}',
  '{"Microphone":"An instrumentfor converting sound waves intoelectrical energy variationswhich may then be amplified,transmitted, or recorded."}',
]);
