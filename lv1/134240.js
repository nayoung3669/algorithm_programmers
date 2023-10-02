function solution(food) {
    let arr = []
    for (let i=1; i<food.length; i++) {
        arr.push(String(i).repeat(Math.floor(food[i] / 2)))
    }
    arr.push(0)
    for (let j=arr.length-2; j>=0; j--) {
        arr.push(arr[j])
    }
    return arr.join("")
}