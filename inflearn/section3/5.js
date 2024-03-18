function solution(s) {
  let a = {};
  let ans = [];
  s.split('').forEach((s) => {
    if (a[s]) {
      a[s] += 1;
    } else {
      a[s] = 1;
    }
  });
  Object.keys(a).map((b) => {
    ans.push(b);
    ans.push(a[b] === 1 ? '' : a[b]);
  });
  return ans.join('');
}

console.log(solution('KKHSSSSSSSE'));
