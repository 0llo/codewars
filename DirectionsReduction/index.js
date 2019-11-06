const dirReduc = arr => {
  const pair = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST"
  };
  if (arr.length > 1) {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pair[arr[i + 1]]) {
          arr[i] = "a";
          arr[i + 1] = "a";
        }
      }
      arr = arr.filter(e => e != "a");
    }
  }
  return arr;
};

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
