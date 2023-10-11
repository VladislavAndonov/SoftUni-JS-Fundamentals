function loading(percent) {
  if (percent === 100) {
    console.log("100 Complete!");
    return;
  }
  let loadingBar = ["["];
  let percentToNum = percent / 10;
  for (let i = 0; i < percentToNum; i++) {
    loadingBar.push("%");
  }
  for (let j = 0; j < 10 - percentToNum; j++) {
    loadingBar.push(".");
  }
  loadingBar.push("]");
  console.log(`${percent}% ${loadingBar.join("")}`);
  console.log("Still loading...");
}
loading(30);
loading(50);
loading(100);
