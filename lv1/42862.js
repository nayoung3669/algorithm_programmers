function solution(n, lost, reserve) {
  let result = n;
  let idx = 0;
  let r = [];
  lost.sort();
  reserve.sort();

  for (let k = 0; k < reserve.length; k++) {
    idx = lost.indexOf(reserve[k]);
    idx === -1 ? r.push(reserve[k]) : lost.splice(idx, 1);
  }

  for (let i = 0; i < lost.length; i++) {
    if (r.includes(lost[i] - 1)) {
      idx = r.indexOf(lost[i] - 1);
      r.splice(idx, 1);
    } else if (r.includes(lost[i] + 1)) {
      idx = r.indexOf(lost[i] + 1);
      r.splice(idx, 1);
    } else {
      result -= 1;
    }
  }

  return result;
}
