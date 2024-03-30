function solution(n, arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {}
  }
  return;
}

console.log(solution(6, [13, 5, 11, 7, 23, 15]));

// 가장 큰 요소가 맨 뒤로 이동 -> n-1번 반복하면 모든 요소가 정렬된 위치애 았음
// 즉 최소 반복 회수 i
