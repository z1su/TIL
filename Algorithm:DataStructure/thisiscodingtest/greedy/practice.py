# 거스름돈 : 시간 복잡도 분석
# 화폐의 종류가 K라고 할 때, 소스코드의 시간 복잡도는 O(K)

n = 1260
count = 0
array = [500,100,50,10] # 큰 단위의 화폐부터 차례대로 확인
for coin in array:
    count += n // coin
    n %= coin # 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
print(count)