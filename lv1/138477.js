function solution(k, score) {
  let arr = [];
  let result = [];
  for (let i = 0; i < score.length; i++) {
    if (arr.length < k) {
      arr.push(score[i]);
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] < score[i]) {
          arr.splice(j, 0, score[i]);
          arr.pop();
          break;
        }
      }
    }
    arr.sort(function (a, b) {
      return b - a;
    });
    result.push(...arr.slice(-1));
  }
  return result;
}
