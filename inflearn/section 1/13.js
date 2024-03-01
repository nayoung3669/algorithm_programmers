function solution(str) {
  const a = [];
  str.split('').forEach((s) => {
    s === s.toUpperCase() ? a.push(s.toLowerCase()) : a.push(s.toUpperCase());
  });
  return a.join('');
}

console.log(solution('StuDY'));
