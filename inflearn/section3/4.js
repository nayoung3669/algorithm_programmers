function solution(s, t) {
  let arr = [];
  let answer = [];
  s.split('').forEach((a, i) => {
    if (a === t) arr.push(i);
  });
  s.split('').map((a, i) => {
    answer.push(Math.min(...arr.map((a) => Math.abs(Number(a) - i))));
  });
  return answer;
}

console.log(solution('teachermode', 'e'));
