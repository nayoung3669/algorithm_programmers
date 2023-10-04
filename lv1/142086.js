function solution(s) {
  let m = new Map();
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (m.get(s[i]) !== undefined) {
      arr.push(i - m.get(s[i]));
      m.set(s[i], i);
    } else {
      m.set(s[i], i);
      arr.push(-1);
    }
  }
  return arr;
}
