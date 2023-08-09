def solution(sizes):
    answer = 0
    big = []
    small = []
    for size in sizes:
        small.append(min(size))
        big.append(max(size))
    
    answer = max(big) * max(small)
    return answer
solution([[60, 50], [30, 70], [60, 30], [80, 40]])