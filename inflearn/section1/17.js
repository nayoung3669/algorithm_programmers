function solution(str) {
  let a = [];
  str.forEach((s) => {
    if (!a.includes(s)) {
      a.push(s);
    }
  });
  return a;
}
console.log(solution(['5', 'good', 'time', 'good', 'time', 'student']));
