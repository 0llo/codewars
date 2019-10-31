String.prototype.toJadenCase = function() {
  //...
  let lines = "";
  const arr = this.split(" ");
  const arr2 = arr.map(items => {
    items = items.split("");
    items[0] = items[0].toUpperCase();
    let word = "";
    for (let i = 0; i < items.length; i++) {
      word = word + items[i];
    }
    return word;
  });
  for (let i = 0; i < arr2.length; i++) {
    lines += arr2[i] + " ";
  }
  lines = lines.slice(0, -1);
  return lines;
};
const str = "How Can Mirrors Be Real If Our Eyes Aren't Real";
console.log(str.toJadenCase());
