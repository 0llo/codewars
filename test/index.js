// const permutation = arr =>
//   arr.length > 1
//     ? arr.reduce(
//         (acc, val, idx) => [
//           ...acc,
//           ...permutation(arr.filter((_, i) => i !== idx)).map(v => [val, ...v])
//         ],
//         []
//       )
//     : [arr];

// const innerP = pres => xs => k =>
//   k === 0
//     ? [pres]
//     : xs.reduce(
//         (acc, e, i) => [
//           ...acc,
//           ...innerP([...pres, e])(xs.filter((_, j) => j !== i))(k - i)
//         ],
//         []
//       );

// const innerA = pres => xs => k =>
//   k === 0
//     ? [pres]
//     : xs.reduce(
//         (acc, e, i) => [
//           ...acc,
//           ...innerA([...pres, e])(xs.filter((_, j) => j !== i))(k - 1)
//         ],
//         []
//       );

// const perm = innerP([]);
// const permA = innerA([]);

// console.log(perm([0, 1, 2, 3])(4));
// console.log(permA([0, 1, 2, 3])(4));
// console.log(permutation([0, 1, 2, 3]));

let arrs = [];
const test = (arr, pre = []) => {
  if (arr.length === 0) {
    console.log(`now arr.length===0`);
    arrs.push([pre]);
    console.log(`arrs : ${arrs}`);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    const copyArr = arr.slice();
    console.log(`i: ${i}, arr: ${arr}, pre: ${pre}, arrs: ${arrs}`);
    pre.push(copyArr[i]);
    test([...arr.slice(0, i), ...arr.slice(i + 1)], pre);
    pre.pop();
  }
};

console.log(test([2, 4, 5]));
