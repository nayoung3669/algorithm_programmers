function solution(arr) {
  let sum = arr.reduce((c, a) => c + a);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      let a = arr[i] + arr[j];
      if (sum - a == 100) {
        return arr.filter((s) => s !== arr[i] && s !== arr[j]);
      }
    }
  }
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
