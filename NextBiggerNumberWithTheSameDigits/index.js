const nextBigger = n => {
  let arrN = [...n.toString()];
  let combo = [];
  const patterns = arr => {
    console.log(`arr.length : ${arr.length}`);
    if (arr.length === 1) {
        console.log(11)
      return;
    } else {
      let result = [];
      let allCasesOfRest = patterns(arr.slice(1)); // recur with the rest of array
      console.log(`allCasesOfRest : ${allCasesOfRest.length}`);
    }
  };
  //   for (let i = 0; i > arr.length; i++) {
  //     let copyArr = arr.concat();
  //     let str = copyArr.splice(i,i);
  //     arr.push(str);
  //   }
  return patterns(arrN);
};
console.log(nextBigger(2017));
