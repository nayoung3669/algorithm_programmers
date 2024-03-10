function solution(n, scores) {
  let sum1 = 0;
  let sum2 = 0;
  let w = 0;
  let h = 0;
  for (let i = 0; i < n; i++) {
    let tmp = 0;
    tmp = scores[i].reduce((cur, acc) => cur + acc);
    if (w < tmp) w = tmp;
    tmp = 0;
    for (let j = 0; j < n; j++) {
      tmp += scores[i][j];
    }
    if (h < tmp) h = tmp;
    sum1 += scores[i][i];
    sum2 += scores[i][n - i - 1];
  }
  return Math.max(w, h, sum1, sum2);
}

console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ]),
);
