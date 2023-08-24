from collections import deque
def solution(maps):
    answer = 0

    # 상하좌우
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    def bfs(x, y):
        queue = deque()
        queue.append((x, y))

        # queue가 빌 때까지 반복
        while queue:
            x, y = queue.popleft()
            (x,y)
            # 상하좌우 칸 확인하기
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                # print(nx,ny)            

                # 맵을 벗어나면 무시하기
                if nx < 0 or nx >= len(maps) or ny < 0 or ny >= len(maps[0]): continue

                # 벽이면 무시하기
                if maps[nx][ny] == 0:  continue

                # 처음 지나가는 길이면 거리계산하고 다시 상하좌우 확인하기
                if maps[nx][ny] == 1:
                    maps[nx][ny] = maps[x][y] + 1 # 현재 위치에서 다음 위치로 갈때 거리를 +1 증가시킴 
                    # 이렇게 하면 maps[nx][ny]에서 출발점 nx,ny까지의 최단 거리가 됨
                    queue.append((nx, ny))    # 재귀

        # 상대 팀 진영(제일 오른쪽 아래 칸)까지의 거리 반환
        print(maps[len(maps)-1][len(maps[0])-1])
        return maps[len(maps)-1][len(maps[0])-1]

    answer = bfs(0, 0)
    print(answer)
    return -1 if answer == 1 else answer    # 상대 팀 진영에 도착할 수 없을 때 -1
solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])