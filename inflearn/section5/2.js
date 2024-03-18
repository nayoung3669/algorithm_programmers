function solution(n1, arr1, n2, arr2) {
  return arr1.filter((n) => arr2.includes(n)).sort((a, b) => a - b);
}

console.log(solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8]));
