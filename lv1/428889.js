function solution(N, stages) {
  let obj = {};
  let arr = [];
  let j = stages.length;
  stages.forEach((s) => {
    if (s !== N + 1) {
      obj[s] === undefined ? (obj[s] = 1) : (obj[s] += 1);
    }
  });
  for (let z = 1; z < N + 1; z++) {
    arr.push([z, (obj[z] || 0) / j]);
    j -= obj[z] || 0;
  }
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });
  return arr.map((e) => e[0]);
}
