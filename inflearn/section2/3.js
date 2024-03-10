function solution(n, a, b) {
  let winner = [];
  a.forEach((as, i) => {
    if (as == 1) {
      b[i] == 2
        ? winner.push('B')
        : b[i] == 1
        ? winner.push('D')
        : winner.push('A');
    } else if (as == 2) {
      b[i] == 3
        ? winner.push('B')
        : b[i] == 2
        ? winner.push('D')
        : winner.push('A');
    } else {
      b[i] == 1
        ? winner.push('B')
        : b[i] == 3
        ? winner.push('D')
        : winner.push('A');
    }
  });
  return winner;
}
console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
