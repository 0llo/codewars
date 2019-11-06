const dirReduc = arr => {
  let x = 0,
    y = 0;
  let answer = [];
  for (e of arr) {
    e === "NORTH" ? y++ : e === "SOUTH" ? y-- : e === "EAST" ? x++ : x--;
  }
  x > 0 ? answer.push("NORTH".repeat(x)) : false;
  x < 0 ? answer.push("SOUTH".repeat(Math.abs(x))) : false;
  y > 0 ? answer.push("EAST".repeat(Math.abs(y))) : y < 0 ? answer.push("EAST".repeat(Math.abs(y))) : false;

  return answer;
};

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
