function solution(str) {
  let a = [];
  str.split('').forEach((s) => {
    if (!a.includes(s)) {
      a.push(s);
    }
  });
  return a.join('');
}

console.log(solution('ksekkset'));
