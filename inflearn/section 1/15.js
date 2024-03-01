function solution(str) {
  const m = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str
      .split('')
      .splice(m - 1, str.length / 2)
      .join('');
  } else {
    return str.split('')[m];
  }
}

console.log(solution('study'));
console.log(solution('good'));
