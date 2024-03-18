function solution(arr) {
  let a = arr
    .toUpperCase()
    .split('')
    .filter((s) => !(s.charCodeAt() >= 65 && s.charCodeAt() <= 90))
    .join('');
  return a[0] === '0' ? a.split('').splice(1).join('') : a;
}

console.log(solution('g0en2T0s8eSoft'));
