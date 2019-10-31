function findUniq(arr) {
  // do magic
  let flag = false;
  let result = arr[0];
  if (arr[0] !== arr[1]) {
    if (arr[0] === arr[2]) {
      result = arr[1];
    } else {
      result = arr[0];
    }
  } else {
    let i = 2;
    while (flag == false) {
      if (arr[i] == arr[0]) {
        i++;
      } else {
        result = arr[i];
        flag = true;
      }
    }
  }
  return result;
}

console.log(findUniq([2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
