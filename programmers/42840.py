def solution(answers):
    answer = []
    supo = [[1,2,3,4,5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    right = [0,0,0]
    
    for i in range(len(supo)):
        for j in range(len(answers)):
            n = len(supo[i])
            if answers[j] == supo[i][j%n]:
                print(i, j, j%n)
                right[i] += 1
    for idx,score in enumerate(right):
        if score == max(right):
            answer.append(idx+1)
    
    return answer
solution([1,2,3,4,5])