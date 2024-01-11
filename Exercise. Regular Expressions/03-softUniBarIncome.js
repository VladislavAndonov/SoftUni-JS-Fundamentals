function income(arr) {
  let totalIncome = 0;
  let line = arr.shift();

  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.?\d*)\$/;

  while (line != "end of shift") {
    let match = line.match(pattern);

    if (match != null) {
      let { name, product, count, price } = match.groups;
      totalIncome += count * price;
      console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`);
    }
    line = arr.shift();
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
income([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
