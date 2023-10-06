function solution(babbling) {
  let c = 0;
  const baby = ["aya", "ye", "woo", "ma"];
  const dup = (b) => {
    for (let z = 0; z < b.length; z++) {
      if (b.split("")[z] === b.split("")[z + 1]) {
        return false;
      }
    }
    return true;
  };
  babbling.forEach((b, i) => {
    baby.forEach((s, j) => {
      b = b.replaceAll(s, j + 1);
    });
    if (Number(b) && dup(b)) {
      c++;
    }
  });
  return c;
}
