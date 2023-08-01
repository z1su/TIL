def solution(players, callings):
    answer = []
    idx = {i:player for i, player in enumerate(players)} #등수:선수
    p = {player:i for i, player in enumerate(players)} #선수:등수
    
    for i in callings:
        loc = p[i] #현재 등수
        loc2 = loc-1 #앞사람 등수
        i2 = idx[loc2]
        
        idx[loc] = i2 #등수:선수에서 현재 등수의 선수를 앞 선수로 업
        idx[loc2] = i #등수:선수에서 앞 등수의 선수를 현재 선수로 다운
        
        p[i] = loc2 #선수:등수에서 현재 선수의 등수를 앞 등수로 업
        p[i2] = loc #선수:등수에서 앞 선수의 등수를 현재 등수로 다운
        
    return list(idx.values())