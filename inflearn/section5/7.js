function solution(str1, str2) {
  return str1.split('').sort().join('') == str2.split('').sort().join('')
    ? 'YES'
    : 'NO';
}
// 문자열을 정렬할 때는 비교 함수를 제공하지 않아도 기본적으로 사전식으로 정렬

console.log(solution('AbaAeCe', 'baeeACA'));
