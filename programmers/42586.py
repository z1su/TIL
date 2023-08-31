from collections import deque

def solution(progresses, speeds):
    # day(일수), deployCount(배포 개수) 선언
    day = 0
    deployCount = 0
    answer = []

    # Queue 생성
    progressQueue = deque()

    # Queue 초기화 (progress, speed)
    for progress, speed in zip(progresses, speeds):
        progressQueue.append((progress, speed))

    while progressQueue:
        # day 증가
        day += 1

        # Queue가 비어있지 않고 진행도가 100이 넘는 경우
        while progressQueue and progressQueue[0][0] + (day * progressQueue[0][1]) >= 100:
            deployCount += 1
            progressQueue.popleft()

        # 해당 일에 배포된 개수가 0이 아닌 경우
        if deployCount != 0:
            answer.append(deployCount)
            deployCount = 0

    return answer

        
solution([93, 30, 55],[1, 30, 5])