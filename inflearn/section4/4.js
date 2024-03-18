function solution(n, m, arr) {
  let sum = 0;
  let discount = true;
  let i = 0;
  let cnt = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  while (sum < m && i < n) {
    if (sum < m) {
      sum += arr[i][0] + arr[i][1];
      cnt++;
    } else if (sum > m && discount) {
      sum -= arr[i][0] + arr[i][0] * 0.5;
      discount = false;
      cnt++;
    } else {
      break;
    }
    i++;
  }
  return cnt;
}

console.log(
  solution(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ]),
);
