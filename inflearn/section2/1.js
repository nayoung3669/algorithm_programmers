function solution(n, arr) {
  return arr.filter((num) => num >= n);
}
console.log(solution(6, [7, 3, 9, 5, 6, 12]));
