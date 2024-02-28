function solution(n) {
  return n % 2 === 0
    ? (n + 1) * Math.ceil(n / 2)
    : (n + 1) * Math.floor(n / 2) + Math.ceil(n / 2);
}

console.log(solution(10));
