function solution(str) {
  let stack = [];
  for (let i = 0; i < str.split('').length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] == '(' && stack.length > 0) {
        stack.pop();
      } else {
        return 'NO';
      }
    }
  }
  return stack.length > 0 ? 'NO' : 'YES';
}

console.log(solution('()(())'));

// 스택에 짝이 없는 괄호가 남아있을 경우
// Underflow 조건 처리
