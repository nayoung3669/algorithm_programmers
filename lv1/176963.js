function solution(name, yearning, photo) {
    let obj = {};
    let s = 0;
    let result = []
    for (let i=0; i<name.length; i++) {
        obj[name[i]] = yearning[i]
    }
    for (let j=0; j<photo.length; j++) {
        for (let v=0; v<name.length; v++) {
            if (photo[j].includes(name[v])) {
                s += obj[name[v]]
            }        
        }
        result.push(s)
        s = 0;
    }
    console.log(result)
    return result
}