function solution(n, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        [arr[j], arr[minIdx]] = [arr[minIdx], arr[j]];
      }
    }
  }
  return arr;
}

console.log(solution(6, [13, 5, 11, 7, 23, 15]));
