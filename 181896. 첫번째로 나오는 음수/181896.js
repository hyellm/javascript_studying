function solution(num_list){
    const result = num_list.findIndex(function(value) {
        return value < 0;
    });
    
    return result;
}