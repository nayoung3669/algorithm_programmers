function solution(d, budget) {
    let sum = 0;
    let results = []
    let cnt = 0;
    d.forEach(e => sum+=e)
    if (sum <= budget) {
        return d.length
    }
    d.sort(function(a,b){return a-b})
    sum=0;
    for (let i=0; i<d.length; i++) {
        sum+=d[i]
        if (sum<budget) {
            cnt ++;
            results.push(cnt)
        } else if (sum === budget) {
            cnt ++;
            return cnt
        } else if (d[i] > budget) {
            return 0;
        } else if (sum>budget) {
            cnt = 0;
            break;
        }
    }
    return Math.max(...results)
}
