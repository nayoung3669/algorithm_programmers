function solution(n, m, arr) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum <= m) {
        cnt++;
      } else {
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(5, 5, [1, 3, 1, 2, 3]));
