function solution(nums) {
  const select = nums.length / 2;

  const countnums = (arr) => {
    return nums.reduce((p, c) => {
      p[c] = ++p[c] || 1;
      return p;
    }, {});
  };

  const countresult = countnums(nums);
  console.log(countresult);
  const unique = Object.keys(countresult).length;
  console.log(unique);
  if (select < unique) {
    return select;
  } else return unique;
}
