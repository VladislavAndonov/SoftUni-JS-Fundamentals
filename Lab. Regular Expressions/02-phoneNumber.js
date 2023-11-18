function phoneNum(arr) {
  let nums = arr[0];

  let pattern = /\+359[ -]2[ -]\d{3}[ -]\d{4}\b/g;

  let match = nums.match(pattern);

  console.log(match.join(", "));
}
phoneNum([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
