function solution(n, scores) {
  let result = {};
  scores.forEach((s, i) => {
    result[s] = i + 1;
  });
  scores.sort((a, b) => b - a);
  return scores.map((s) => result[s]);
}
console.log(solution(10, [87, 89, 92, 100, 76]));
