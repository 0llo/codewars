const input = "t";
const getMiddle = input => {
  const tmp = input.length % 2;
  const tmp2 = Math.floor(input.length / 2);
  let result;
  if (tmp === 0) {
    return input.slice(tmp2 - 1, tmp2 + 1);
  } else {
    return input.slice(tmp2, tmp2 + 1);
  }
};
console.log(getMiddle(input));
