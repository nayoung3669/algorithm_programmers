function solution(n1, arr1, n2, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(solution(3, [1, 3, 5], 5, [2, 3, 6, 7, 9]));
