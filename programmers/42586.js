function solution(progresses, speeds) {
  var answer = [0];
  // 인덱스의 day를 구한다.
  let days = [];

  for (let i in progresses) {
    // 반올림 말고 올림처리
    let day = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(day);
  }
  let max = days[0]; // 최대 일자를 첫번째 값으로 초기화 , 이후 비교하며 교체

  console.log(days);

  // days 배열 순회
  for (let i = 0, j = 0; i < days.length; i++) {
    // max보다 작으면 count 증가
    if (days[i] <= max) {
      answer[j] += 1;
    } else {
      // 최댓값 교체 후
      max = days[i];
      // count 증가해서 answer 배열에 추가
      answer[++j] = 1;
    }
  }

  return answer;
}
