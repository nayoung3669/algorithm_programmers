function solution(keymap, targets) {
  let m = new Map();
  let arr = [];
  let sum = 0;
  keymap.map((k) => {
    k.split("").map((al, i) => {
      if (m.get(al)) {
        m.get(al) > i + 1 && m.set(al, i + 1);
      } else {
        m.set(al, i + 1);
      }
    });
  });
  for (let i = 0; i < targets.length; i++) {
    sum = 0;
    for (let j = 0; j < targets[i].length; j++) {
      sum += m.get(targets[i][j]);
    }
    !sum ? arr.push(-1) : arr.push(sum);
  }
  return arr;
}
