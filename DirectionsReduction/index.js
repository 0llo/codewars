const dirReduc = arr => {
  const pair = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST"
  };
  return arr.reduce((a, b) => {
    a[[a.length] - 1] === pair[b] ? a.pop() : a.push(b);
    return a;
  }, []);
};

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

const dirReduc2 = plan => {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST"
  };
  return plan.reduce((dirs, dir) => {
    console.log(dirs.length);
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
};
console.log(dirReduc2(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
