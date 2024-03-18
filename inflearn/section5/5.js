function solution(n, k, arr) {
  let sum = 0;
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc = 0;
    for (let j = i; j < i + k; j++) {
      acc += arr[j];
    }
    if (sum < acc) {
      sum = acc;
    }
  }
  return sum;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
