function solution(num_list) {
    var list_len = num_list.length;
    
    num_list[list_len - 1] > num_list[list_len - 2] ? num_list.push(num_list[list_len - 1] - num_list[list_len - 2]) : num_list.push(num_list[list_len - 1] * 2);
    
    return num_list
}