number = [-1,0,1,2,-1,-4]
def solution(number):
    answer = 0
    number=sorted(number)
    for a in number:
        for b in number:
            for c in number:
                if 0 in number:
                    if a<=b and b<=c and a+b+c==0:
                        answer+=1
    print(answer)                        
    return answer