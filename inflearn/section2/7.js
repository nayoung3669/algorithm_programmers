function solution(n, nums) {
  let cnt = 0;
  let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    ...nums.map((num) => {
      return [0, ...num, 0];
    }),
    [0, 0, 0, 0, 0, 0, 0],
  ];
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (
        arr[i - 1][j] < arr[i][j] &&
        arr[i][j + 1] < arr[i][j] &&
        arr[i + 1][j] < arr[i][j] &&
        arr[i][j - 1] < arr[i][j]
      )
        cnt++;
    }
  }
  return cnt;
}

console.log(
  solution(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ]),
);
