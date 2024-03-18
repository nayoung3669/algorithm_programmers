function solution(arr) {
  let a = arr.toLowerCase().split('');
  return a.splice(0, arr.length / 2).join('') ===
    a.reverse().join('').toLowerCase()
    ? 'YES'
    : 'NO';
}

console.log(solution('gooG'));
