const hand = (holeCards, communityCards) => {
  let t = "nothing";
  let r = [];
  let cardsChosen = {};
  const allCards = [...holeCards, ...communityCards];
  let allCardsNumOnly = [];
  let allCardsSuitOnly = [];
  let countCards = [];
  for (let i = 0; i <= 12; i++) countCards[i] = 0;
  for (e of allCards) {
    let num = e[0];
    let suit = e[1];
    if (e[1] === "0") {
      num = 10;
      suit = e[2];
    }
    if (num === "A") num = 14;
    else if (num === "K") num = 13;
    else if (num === "Q") num = 12;
    else if (num === "J") num = 11;
    else num = Number(num);
    if (suit === "♠") suit = "s";
    else if (suit === "♦") suit = "d";
    else if (suit === "♣") suit = "c";
    else suit = "h";
    countCards[num - 2]++;
    allCardsNumOnly.push(num);
    allCardsSuitOnly.push(suit);
  }
  const sS = allCardsSuitOnly.join("");
  const allCardsNumUnSorted = [...allCardsNumOnly];
  allCardsNumOnly.sort((a, b) => b - a);

  console.log(`  allcards: ${allCards},
    allCardsNumOnly    : ${allCardsNumOnly},
    allCardsSuitOnly   : ${allCardsSuitOnly},
    allCardsNumUnSorted: ${allCardsNumUnSorted},
    sS                 : ${sS},
    countCards         : ${countCards}`);

  const isFourOfAKind = () => {
    const ans = countCards.includes(4);
    if (ans) {
      const num = countCards.lastIndexOf(4) + 2;
      cardsChosen.fourOfAKind = [num, num, num, num];
    }
    return ans;
  };
  const isFlash = () => {
    if (/s/.test(sS)) {
      if (sS.slice().match(/s/g).length >= 5) {
        cardsChosen.flashSuite = "s";
        cardsChosen.flash = [...sS]
          .map((val, index) => {
            if (val === cardsChosen.flashSuite)
              return allCardsNumUnSorted[index];
            else return false;
          })
          .filter(v => v)
          .sort((a, b) => b - a);
        console.log(`cardsChosen.flash: ${cardsChosen.flash}`);
        return true;
      }
    }
    if (/d/.test(sS)) {
      if (sS.slice().match(/d/g).length >= 5) {
        cardsChosen.flashSuite = "d";
        cardsChosen.flash = [...sS]
          .map((val, index) => {
            if (val === cardsChosen.flashSuite)
              return allCardsNumUnSorted[index];
            else return false;
          })
          .filter(v => v)
          .sort((a, b) => b - a);
        console.log(`cardsChosen.flash: ${cardsChosen.flash}`);
        return true;
      }
    }
    if (/c/.test(sS)) {
      if (sS.slice().match(/c/g).length >= 5) {
        cardsChosen.flashSuite = "c";
        cardsChosen.flash = [...sS]
          .map((val, index) => {
            if (val === cardsChosen.flashSuite)
              return allCardsNumUnSorted[index];
            else return false;
          })
          .filter(v => v)
          .sort((a, b) => b - a);
        console.log(`cardsChosen.flash: ${cardsChosen.flash}`);
        return true;
      }
    }
    if (/h/.test(sS)) {
      if (sS.slice().match(/h/g).length >= 5) {
        cardsChosen.flashSuite = "h";
        cardsChosen.flash = [...sS]
          .map((val, index) => {
            if (val === cardsChosen.flashSuite)
              return allCardsNumUnSorted[index];
            else return false;
          })
          .filter(v => v)
          .sort((a, b) => b - a);
        console.log(`cardsChosen.flash: ${cardsChosen.flash}`);
        return true;
      }
    }
    return false;
  };
  const isStraight = () => {
    const ans = /[1234]{5,}/.test(countCards.join(""));
    if (ans) {
      cardsChosen.straight = [];
      let tempNum =
        countCards
          .slice()
          .join("")
          .search(/[1234]{5,}/) + 2;
      for (
        let i = 0;
        i <
        countCards
          .slice()
          .join("")
          .match(/[1234]{5,}/)
          .join("").length;
        i++
      )
        cardsChosen.straight.push(tempNum + i);
      cardsChosen.straight = cardsChosen.straight.slice().sort((a, b) => b - a);
      //console.log(`tempNum: ${tempNum}, cardsChosen.straight: ${cardsChosen.straight}`)
    }
    return ans;
  };
  const isThreeOfAKind = () => {
    const ans = countCards.includes(3);
    if (ans) {
      const num = countCards.lastIndexOf(3) + 2;
      cardsChosen.threeOfAKind = [num, num, num];
    }
    return ans;
  };
  const isTwoPair = () => {
    const str = countCards.join("");
    if (countCards.includes(2) || countCards.includes(3)) {
      if (str.match(/[2345]/g).length >= 2) {
        const num = countCards.lastIndexOf(2);
        const num2 = countCards.lastIndexOf(2, num - 1);
        cardsChosen.twoPair = [num + 2, num + 2, num2 + 2, num2 + 2];
        return true;
      }
    }
    return false;
  };
  const isPair = () => {
    const ans = countCards.includes(2);
    if (ans) {
      const num = countCards.lastIndexOf(2) + 2;
      cardsChosen.pair = [num, num];
    }
    return ans;
  };
  const isFullHouse = () => {
    if ((isTwoPair() && isThreeOfAKind()) || (isTwoPair() && isFourOfAKind())) {
      const num = countCards.lastIndexOf(3);
      let num2 = countCards.lastIndexOf(3, num - 1);
      if (num2 === -1) num2 = countCards.lastIndexOf(2);
      cardsChosen.fullHouse = [num + 2, num + 2, num + 2, num2 + 2, num2 + 2];
      return true;
    }
    return false;
  };
  const isStraightFlash = cards => {
    if (isStraight() && isFlash()) {
      console.log(`cardsChosen.flashSuite: ${cardsChosen.flashSuite}`);
      //         const tempArr = sS.map((val,index)=>{
      //           if(val===cardsChosen.flashSuite)return true;
      //           else return false;
      //         });
      const tempArr = cardsChosen.straight
        .map((val, index) => {
          const tempArr2 = allCardsNumUnSorted.map((val2, index2) => {
            if (val === val2 && sS[index2] === cardsChosen.flashSuite)
              return true;
            else return false;
          });
          if (tempArr2.includes(true)) return val;
          return false;
        })
        .filter(v => v);
      if (tempArr.length >= 5) {
        cardsChosen.straightFlash = tempArr.slice(0, 5);
        return true;
      } else return false;
    }
    return false;
  };

  if (isStraightFlash()) {
    t = "straight-flush";
    r = cardsChosen.straightFlash;
  } else if (isFourOfAKind()) {
    t = "four-of-a-kind";
    r = cardsChosen.fourOfAKind;
  } else if (isFullHouse()) {
    t = "full house";
    r = cardsChosen.fullHouse;
  } else if (isFlash()) {
    t = "flush";
    r = cardsChosen.flash.slice(0, 5);
  } else if (isStraight()) {
    t = "straight";
    r = cardsChosen.straight.slice(0, 5);
  } else if (isThreeOfAKind()) {
    t = "three-of-a-kind";
    r = cardsChosen.threeOfAKind;
  } else if (isTwoPair()) {
    t = "two pair";
    r = cardsChosen.twoPair;
  } else if (isPair()) {
    t = "pair";
    r = cardsChosen.pair;
  } else {
    r = allCardsNumOnly.slice(0, 5);
  }

  if (r.length !== 5) {
    const remainings = allCardsNumOnly
      .map(val => {
        r.forEach(val2 => {
          if (val2 === val) val = false;
        });
        return val;
      })
      .filter(v => v);
    r = [...r, ...remainings].slice(0, 5);
  }
  const rStr = r.map(val => {
    let str = val + "";
    console.log(`val: ${val}`);
    if (str === "14") str = "A";
    else if (str === "13") str = "K";
    else if (str === "12") str = "Q";
    else if (str === "11") str = "J";
    return str;
  });
  const rSet = Array.from(new Set(rStr));

  let result = { type: t, ranks: rSet };
  console.log(
    `isPair(): ${isPair()}, isTwoPair(): ${isTwoPair()}, isThreeOfAKind: ${isThreeOfAKind()}, isStraight(): ${isStraight()}, isFlash(): ${isFlash()}, isFullHouse(): ${isFullHouse()}`
  );
  console.log(`rStr: ${rStr}`);
  return result;
};
