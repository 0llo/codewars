const dirReduc = arr => {
  const pair = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST"
  };
  let answer = arr.reduce((result, value, index) => {
    if (!result) {
      result = [];
    }
    if (index == 0) {
      result.push(value);
    } else if (result[result.length] != pair.value) {
      result.push(value);
    }
    return result;
  });

  return answer;
};

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
