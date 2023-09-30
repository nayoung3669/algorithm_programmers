function solution(array, commands) {
    let r = []
    let result = []
    for (let i=0; i<commands.length;i++) {
        r = array.slice(commands[i][0]-1, commands[i][1])
        r.sort(function(a,b){return a-b})
        result.push(r[commands[i][2]-1])
    }
    return result
}