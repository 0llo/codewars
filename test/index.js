function test(input) {
  const arr = input.split(" ");
  const arrNum = arr.map(word => {
    return word.length;
  });

  return Math.min.apply(null, arrNum);
}
const input = "bitcoin take over the world maybe who knows perhaps";
console.log(test(input));
