with open("/Users/songjisu/Documents/GitHub/TIL/Algorithm:DataStructure/thisiscodingtest/greedy/dfs/input.txt", "r") as file:
    # N, M 읽기
    N, M = map(int, file.readline().split())
    
    # graph 초기화
    graph = []
    for _ in range(N):
        graph.append(list(map(int, file.readline().split())))


def ice_dfs(x,y):
    # 종료조건 1
    if x<0 or x>=N or y<0 or y>=M:
        return False  

    # 성공조건  
    if graph[x][y]==0:
        graph[x][y]=1
        ice_dfs(x,y-1) # 좌
        ice_dfs(x,y+1) # 우
        ice_dfs(x-1,y) # 상
        ice_dfs(x+1,y) # 하
        return True
      
    # 종료조건 2
    return False    
    
result=0
for i in range(N):
    for j in range(M):
        if ice_dfs(i,j):
            result+=1
print(result)