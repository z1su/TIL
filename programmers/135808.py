def solution():
    answer = 0
    k = 4
    m = 3
    score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
    score.sort(reverse=True)
    for i in range(len(score) // m):
        answer += score[i * m + m - 1] * m
        print(i)
    return answer

solution()