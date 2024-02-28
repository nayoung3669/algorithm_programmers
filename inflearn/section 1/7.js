function solution(n, arr) {
  return arr.filter((num) => num % 10 === n).length;
}

let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
