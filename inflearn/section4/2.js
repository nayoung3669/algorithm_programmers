function solution(n, arr) {
  let nums = arr.map((num) => Number(String(num).split('').reverse().join('')));
  return nums.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
