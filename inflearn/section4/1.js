function solution(n, arr) {
  let max = 0;
  let results = [];
  const r = arr.map((s) => {
    return String(s)
      .split('')
      .reduce((cur, acc) => Number(cur) + Number(acc));
  });
  max = Math.max(...r);
  r.forEach((a, i) => {
    if (a === max) {
      results.push(arr[i]);
    }
  });
  return Math.max(...results);
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
