def solution():
    strlist = ["abc", "de", "fgh"]
    answer = []
    count = 0
    for i in strlist:
        count = 0;
        for j in i:
            count +=1;
        answer.append(count)
        print(answer)
    return answer