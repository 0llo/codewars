const isPrime = num => {
  if (num < 2) return false;
  num = Math.abs(num);
  let arrPrime = [];
  for (let i = 0; i <= num; i++) {
    arrPrime.push(true);
  }
  arrPrime[0] = false;
  arrPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) {
      arrPrime[i * j] = false;
    }
  }
  return arrPrime[num];
};
