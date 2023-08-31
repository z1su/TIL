def solution(s):
    stack = []
    answer = True

    for i in s:
        if i == "(":
            stack.append(i)
        else:
            if stack == []: # )가 (보다 먼저 나온 경우
                answer = False
                break
            else:
                stack.pop()
    if stack != []:
        answer = False
    print(answer)
    return answer
solution("(())()")