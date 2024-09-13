function solution(n, k) {
    var answer = [];
    let i = 0;
    
    for (let idx = k; idx <= n; idx += k)
        answer.push(idx);

    return answer;
}