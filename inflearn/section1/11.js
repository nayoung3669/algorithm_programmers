function solution(str) {
  let c = 0;
  str.split('').forEach((s) => {
    if (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) {
      c += 1;
    }
  });
  return c;
}

console.log(solution('KoreaTimeGooZ'));
