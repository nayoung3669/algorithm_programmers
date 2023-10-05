function solution(a, b, n) {
  let sum = 0;
  while (true) {
    if (n >= a) {
      sum += Math.floor(n / a) * b;
      n = Math.floor(n / a) * b + (n % a);
    } else {
      break;
    }
  }
  return sum;
}
