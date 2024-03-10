function solution(n, scores) {
  let cnt = 0;
  let tmp = 0;
  scores.forEach((s, i) => {
    if (s === 1) {
      if (i === 0) tmp = 1;
      else {
        if (scores[i - 1] === 1) tmp += s;
        else tmp = 1;
      }
    } else {
      tmp = 0;
    }
    cnt += tmp;
  });
  return cnt;
}
console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
