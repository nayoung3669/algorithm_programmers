function solution(s, t) {
  let str = '';
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    str = [];
    for (let j = i; j < i + t.split('').length; j++) {
      str.push(s.split('')[j]);
    }
    if (t.split('').sort().join('') == str.sort().join('')) cnt++;
  }
  return cnt;
}

console.log(solution('bacaAacba', 'abc'));
