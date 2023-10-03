function solution(players, callings) {
    let idx = 0;
    for (let i=0; i<callings.length;i++) {
        for (let j= 0; j<players.length; j++) {
            if (callings[i] === players[j]) {
                idx = j
                break;
            }
        }
        players = [...players.slice(0,idx-1), players[idx], players[idx-1], ...players.slice(idx+1,players.length)]
    }
    return players;
}