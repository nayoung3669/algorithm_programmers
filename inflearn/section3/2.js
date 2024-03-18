function solution(arr) {
  let a = arr
    .toUpperCase()
    .split('')
    .filter((s) => s.charCodeAt() >= 65 && s.charCodeAt() <= 90); // 알파벳만 추출
  return a.join('') == a.reverse().join('') ? 'YES' : 'NO';
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
