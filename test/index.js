const generate = numRows => {
  const result = [];
  const numRowsH = Math.ceil(numRows / 2);
  for (let i = 1; i <= numRows; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) arr.push(j);
    result.push(arr);
  }

  for (let i = 1; i <= numRowsH; i++) {}

  return result;
};

console.log(generate(5));
