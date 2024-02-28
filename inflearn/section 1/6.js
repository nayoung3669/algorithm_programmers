function solution(arr) {
  const nums = arr.filter((n) => n % 2 !== 0); // 홀수배열을 먼저 만들고
  const sum = nums.reduce((cur, acc) => (acc += cur)); // 만든 홀수 배열로 reduce
  console.log(sum, Math.min(...nums));
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
