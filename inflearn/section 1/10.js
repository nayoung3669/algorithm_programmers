function solution(str, s) {
  let sum = 0;
  str.split('').forEach((cur) => {
    if (cur === s) sum += 1;
  });
  return sum;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
