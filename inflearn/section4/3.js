function solution(n, m, arr) {
  const obj = {};
  let cnt = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sliced = arr[i].slice(j + 1);
      if (i > 0) {
        obj[arr[i][j]] = obj[arr[i][j]].filter((num) => sliced.includes(num));
      } else {
        obj[arr[i][j]] = sliced;
      }
    }
  }
  Object.keys(obj).forEach((num) => {
    cnt += obj[num].length;
  });
  return cnt;
}

console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ]),
);
