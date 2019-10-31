function main(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

console.log(main("Daniel", "Daniel"));
