function solution(n, m, section) {
    let c = 0;
    let i = 0;
    let p = section[0];
    while(i<section.length) {
        if (!(p + m - 1 >= section[i+1])) {
            p=section[i+1]
            c++;
        }
        i++;
    }
    return c
}