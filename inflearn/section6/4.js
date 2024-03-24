function solution(str) {
  let stack = [];
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      let cal = [
        Number(stack[Math.ceil(stack.length / 2) - 1]),
        Number(stack[Math.ceil(stack.length / 2)]),
      ];
      if (str[i] === '+') {
        result = cal[0] + cal[1];
      } else if (str[i] === '-') {
        result = cal[0] - cal[1];
        console.log(result);
      } else if (str[i] === '*') {
        result = cal[0] * cal[1];
      } else {
        result = cal[0] / cal[1];
      }
      stack.pop();
      stack.pop();
      stack.push(result);
    } else {
      stack.push(Number(str[i]));
    }
  }
  return result;
}

console.log(solution('352+*9-'));
