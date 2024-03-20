// ***

function solution(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      stack.push(i);
    } else if (str[i] == ')') {
      let start = stack.pop();
      str = str.substring(0, start) + str.substring(i + 1);
      i -= i - start + 1;
    }
  }
  return str;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));

// 괄호의 인덱스를 스택에 push, substring으로 문자열 함수 사용
