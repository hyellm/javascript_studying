function solution(start_num, end_num) {
    var answer = [];
    let idx = 0;
    
    for (let i=start_num; i>=end_num; i--)
    {
        answer[idx] = i;
        idx++;
    }
            
    return answer;
}