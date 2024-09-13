function solution(my_string, is_prefix) {
    let flag = 1;
    
    for (let i = 0; i < is_prefix.length; i++)
    {
        if (my_string[i] === is_prefix[i])
            continue;
        else
        {
            flag = 0;
            break;
        }
    }
    
    return (flag === 1) ? 1 : 0;
}