function solution(a, b, c) {
  let arr = [a, b, c];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr[0];
}

console.log(solution(6, 3, 5));

/*
function solution(a, b, c) {
  return Math.min(a, b, c);
}
 */

/*
  let arr = [a, b, c];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr[0];
 */
