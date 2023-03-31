function solution(participant, completion) {
  let answer = 0;

  const objp = participant.reduce((a, i) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});
  const objc = completion.reduce((a, i) => {
    return (a[i] = (a[i] || 0) + 1), a;
  }, {});

  let difff = Object.keys(objp).find((key) => objp[key] !== objc[key]);

  return difff;
}
