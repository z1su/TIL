function solution(citations) {
  var answer = 0;

  // 내림차순 정렬
  // h의 citations[i] 가 h의 citations[i]보다 크거나 같은 논문 수보다 많으면
  // h++

  citations.sort((a, b) => b - a);
  console.log(citations);
  let h = 0;
  while (h + 1 <= citations[h]) {
    h++;
  }

  return h;
}
