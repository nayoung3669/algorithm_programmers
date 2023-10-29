function solution(players, callings) {
  let idx = 0;
  for (let i = 0; i < callings.length; i++) {
    idx = players.indexOf(callings[i]);
    players = [
      ...players.slice(0, idx - 1),
      players[idx],
      players[idx - 1],
      ...players.slice(idx + 1, players.length),
    ];
  }
  return players;
}
