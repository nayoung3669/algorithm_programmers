function solution(n) {
    let c = 0;
    for (let i=0;i<n.length;i++) {
        for (let j=i+1;j<n.length;j++) {
            for (let z=j+1; z<n.length;z++)
                if (n[i]+n[j]+n[z] === 0) {
                    c++;
                }
        }
    }
    return c
}