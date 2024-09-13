function solution(my_string, is_suffix) {
    for (let i = 0; i < my_string.length; i++)
    {
        let cmp = my_string.slice(i);
        
        if (cmp === is_suffix)
            return 1;
    }
    
    return 0;
}