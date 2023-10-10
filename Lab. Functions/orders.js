function orders(order, count) {
  let productPrice = 0;
  let totalPrice = 0;
  switch (order) {
    case "coffee":
      productPrice = 1.5;
      break;
    case "water":
      productPrice = 1.0;
      break;
    case "coke":
      productPrice = 1.4;
      break;
    case "snacks":
      productPrice = 2.0;
      break;
  }
  totalPrice = productPrice * count;
  console.log(totalPrice.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);
