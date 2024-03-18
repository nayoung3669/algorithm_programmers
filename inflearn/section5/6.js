function solution(n, str) {
  let obj = {};
  str.split('').forEach((ch) => {
    if (!obj[ch]) {
      obj[ch] = 1;
    } else {
      obj[ch] += 1;
    }
  });
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(solution(15, 'BACBACCACCBDEDE'));
