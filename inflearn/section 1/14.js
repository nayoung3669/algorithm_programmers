function solution(arr) {
  let c = 0;
  let a = '';
  arr.forEach((s) => {
    if (c < s.length) {
      c = s.length;
      a = s;
    }
  });
  return a;
}
console.log(solution(['5', 'teacher', 'time', 'student', 'beautiful', 'good']));
