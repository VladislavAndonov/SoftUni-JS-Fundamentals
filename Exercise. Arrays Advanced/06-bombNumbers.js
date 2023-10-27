function bombNums(nums, bombParams) {
  let [bombNum, power] = bombParams;
  while (nums.includes(bombNum)) {
    let index = nums.indexOf(bombNum);
    nums.splice(Math.max(0, index - power), power * 2 + 1);
  }
  let sum = 0;
  for (let el of nums) {
    sum += el;
  }
  console.log(sum);
}
bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNums([1, 7, 7, 1, 2, 3], [7, 1]);
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
