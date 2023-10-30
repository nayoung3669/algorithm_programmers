function solution(players, callings) {
  let idx = 0;
  let temp = "";
  let m = new Map();
  players.map((n, index) => {
    m.set(n, index);
  });
  for (let i = 0; i < callings.length; i++) {
    idx = m.get(callings[i]);
    m.set(players[idx], idx - 1);
    m.set(players[idx - 1], idx);
    temp = players[idx - 1];
    players[idx - 1] = callings[i];
    players[idx] = temp;
  }
  return players;
}
