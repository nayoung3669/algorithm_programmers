function solution(X, Y) {
  let arr = [];
  let i = 0;
  let x = X.split("").sort((a, b) => (a > b ? 1 : -1));
  let y = Y.split("").sort((a, b) => (a > b ? 1 : -1));
  for (let j = x.length - 1; j > 0; j--) {
    console.log(x[j], " ", y.unshift());
    if (x[j] == y.unshift()) {
      arr.push(x[j]);
    } else {
      y.pop();
    }
  }
  return arr.length ? Number(arr.join("")) + "" : "-1";
}
