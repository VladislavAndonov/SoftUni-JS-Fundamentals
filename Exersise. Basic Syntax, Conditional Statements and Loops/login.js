function login(input) {
  let username = input[0];
  let password = "";
  let usernameLength = username.length;
  for (let letter = usernameLength - 1; letter >= 0; letter--) {
    password += username[letter];
  }
  let attemptsCount = 1;
  let i = 1;
  let passAttempt = input[i];
  while (attemptsCount <= 3) {
    if (passAttempt !== password) {
      console.log("Incorrect password. Try again.");
      attemptsCount++;
    } else {
      console.log(`User ${username} logged in.`);
      return;
    }
    i++;
    passAttempt = input[i];
  }
  if (passAttempt !== password) {
    console.log(`User ${username} blocked!`);
  } else {
    console.log(`User ${username} logged in.`);
  }
}
// login(["Acer", "login", "go", "let me in", "recA"]);
// login(['momo','omom'])
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
