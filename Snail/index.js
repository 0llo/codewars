const snail = array => {
  let arr = [];
  const totalR = Math.ceil(array.length / 2);
  let lenH = array.length;
  let lenV = array.length;
  //i = times of the round
  for (let i = 0; i < totalR; i++) {
    // j = topleft to topright
    for (let j = 0; j < lenH; j++) {
      arr.push(array[0][j]);
    }
    array.splice(0, 1);
    lenV--;

    //topleft to bottomleft
    for (let j = 0; j < lenV; j++) {
      arr.push(array[j][lenH - 1]);
      array[j].splice(lenH - 1, 1);
    }
    lenH--;

    //rightbottom to leftbottom
    for (let j = lenH - 1; j >= 0; j--) {
      arr.push(array[lenV - 1][j]);
    }
    array.splice(lenV - 1);
    lenV--;

    //leftbottom to lefttop
    for (let j = lenV - 1; j >= 0; j--) {
      if (lenV >= 0) {
        arr.push(array[j][0]);
        array[j].splice(0, 1);
      } else {
      }
    }
    lenH--;
  }
  if (arr[0] === undefined) arr = [];
  return arr;
};

console.log(
  snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
);
