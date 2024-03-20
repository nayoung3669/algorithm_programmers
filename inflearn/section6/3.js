function solution(board, moves) {
  let stack = [];
  let cnt = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let k = board[j][moves[i] - 1];
      if (k !== 0) {
        if (k && stack.slice(-1) == k) {
          stack.pop();
          cnt++;
        } else {
          stack.push(k);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return cnt * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
);
