# 1이 될때까지 
# 나눌 수 있을때까지 나눠주고, 안 나눠지면 1을 빼준다. 

n = 25
k = 5 

print(n//k)

result = 0

while True:
    # n이 k로 나누어 떨어지는 수가 될 때까지 빼기
    target = (n//k) * k
    result += (n-target)
    n = target

    #n이 k보다 작을 때(더이상 나눌 수 없을때) 반복문 탈출
    if n<k:
        break
    # k로 나누기
    result += 1
    n // k
    
# 마지막으로 나눈 수에 대하여 1씩 빼기
result += (n-1)
print(result)
print("hi")