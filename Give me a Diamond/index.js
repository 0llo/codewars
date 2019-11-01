function diamond(n) {
  let diam = "";
  if (n % 2 === 1) {
    for (let i = 1; i <= n; i++) {
      const m = (n + 1) / 2 - i;
      const o = i * 2 - 1;
      if (m >= 0) {
        diam += " ".repeat(m) + "*".repeat(o) + "\n";
      } else {
        const ma = Math.abs(m);
        const oa = n - ma * 2;
        diam += " ".repeat(ma) + "*".repeat(oa) + "\n";
      }
    }
  } else {
    diam = null;
  }
  return diam;
}

console.log(diamond(11));
