function solution(n, m, arr) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    sum = arr[i];
    for (let j = i + 1; j < n; j++) {
      // 범위
      sum += arr[j];
      if (sum == m) {
        cnt++;
        break;
      } else if (sum > m) {
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
