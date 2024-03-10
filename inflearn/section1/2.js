function solution(a, b, c) {
  let arr = [a, b, c].filter((e) => e !== Math.max(a, b, c));
  return arr[0] + arr[1] > Math.max(a, b, c) ? 'YES' : 'NO';
}

console.log(solution(6, 7, 11));
