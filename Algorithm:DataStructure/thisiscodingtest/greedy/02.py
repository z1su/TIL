# 곱하기 혹은 더하기
import sys
data = list(map(int, list(sys.stdin.readline().rstrip())))
result = int(data[0])


for i in range (1, len(data)):
    num = int(data[i])
    if num <= 1 or result <= 1:
        result += num
    else:
        result *= num
print(result)