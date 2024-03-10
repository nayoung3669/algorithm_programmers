function solution(n, arr) {
  let cnt = 0;
  arr.map((s, i) => {
    if (s < arr[i + 1]) {
      cnt += 1;
    }
  });
  return cnt;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
