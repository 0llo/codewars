const theLift = (queues, capacity) => {
  let history = [0];
  let waitingList = queues.slice();
  let direction = "up";
  let currentLevel = 0;
  let numPeople = 0;
  let destination = [];
  let space = Number(capacity) - 0;
  let isNoAction = true;
  const maxLevel = waitingList.length - 1;
  console.log(`maxLevel: ${maxLevel}, capacity: ${capacity}`);
  for (let i = 0; i < waitingList.length; i++)
    console.log(`${i}F | ${waitingList[i]}`);
  console.log(` `);
  const operate = () => {
    if (currentLevel === 0) direction = "up";
    else if (currentLevel === maxLevel) direction = "down";
    console.log(`------${direction}------`);
    if (direction === "up") {
      for (let i = currentLevel; i <= maxLevel; i++) {
        console.log(
          `i: ${i}, waitL[i]: ${waitingList[i]}, destination: ${destination}`
        );
        if (waitingList[i].length < 1 && !destination.includes(i)) continue;
        if (i > Math.max(...waitingList[i]) && !destination.includes(i))
          continue;
        console.log(`${i}F`);
        isNoAction = false;
        currentLevel = i;
        history.push(i);
        destination = destination.filter(value => value != currentLevel); //get off
        const peopleOnboard = waitingList[i]
          .slice()
          .filter(value => value > currentLevel);
        let count = space;
        waitingList[i] = waitingList[i].filter(value => {
          if (count < 1 || value < currentLevel) {
            return value;
          } else {
            count--;
          }
        });
        destination = destination
          .concat(peopleOnboard.slice(0, space))
          .sort((a, b) => a - b);
        space = capacity - destination.length;
        console.log(`destination: ${destination}, space: ${space}`);
        console.log(` `);
      }
      direction = "down";
      if (isNoAction) currentLevel = maxLevel;
      isNoAction = true;
    } else if (direction === "down") {
      for (let i = currentLevel; i >= 0; i--) {
        console.log(
          `i: ${i}, waitL[i]: ${waitingList[i]}, destination: ${destination}`
        );
        if (waitingList[i].length < 1 && !destination.includes(i)) continue;
        if (i < Math.min(...waitingList[i]) && !destination.includes(i))
          continue;
        console.log(`${i}F`);
        isNoAction = false;
        currentLevel = i;
        history.push(i);
        destination = destination.filter(value => value != currentLevel); //get off
        const peopleOnboard = waitingList[i]
          .slice()
          .filter(value => value < currentLevel);
        let count = space;
        waitingList[i] = waitingList[i].filter(value => {
          if (count < 1 || value > currentLevel) {
            return value;
          } else {
            count--;
          }
        });
        destination = destination
          .concat(peopleOnboard.slice(0, space))
          .sort((a, b) => a - b);
        space = capacity - destination.length;
        console.log(`destination: ${destination}, space: ${space}`);
        console.log(` `);
      }
      if (destination.length > 0) direction = "up";
      if (isNoAction) currentLevel = 0;
      isNoAction = true;
    }
    console.log(`------END MOVE------`);
    console.log(
      `direction: ${direction}, currentLevel: ${currentLevel}, space: ${space}`
    );
    console.log(`People inside(destination): ${destination},`);
    console.log(` `);
    for (let i = 0; i < waitingList.length; i++)
      console.log(`${i}F | ${waitingList[i]}`);
    console.log(` `);
    console.log(`history: ${history}`);
    console.log(`------END MOVE------`);
    console.log(` `);
    console.log(` `);
    console.log(` `);
    const waiter = waitingList.slice().reduce((a, b) => a + b.length, 0);

    //console.log(`waiter: ${waiter}, destination.length: ${destination.length}, waitingList.length:${waitingList.length}`);
    if (destination.length !== 0 || waiter !== 0) operate();
  };
  operate();
  console.log(queues);
  if (history[history.length - 1] !== 0) history.push(0);
  if (history[1] === 0) history.shift();
  return history;
};
