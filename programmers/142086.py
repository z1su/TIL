def solution(s):
    answer = []
    dic = dict()
    
    for i in range(len(s)):
        if s[i] in dic:
            answer.append(i-dic[s[i]])
            dic[s[i]] = i
        else:
            dic[s[i]] = i
            answer.append(-1)
        print(dic)
    return answer