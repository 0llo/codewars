function test(dna) {
  const arr = dna.split("");
  const result = arr
    .map(item => {
      switch (item) {
        case "A":
          return "T";
          break;
        case "T":
          return "A";
          break;
        case "C":
          return "G";
          break;
        case "G":
          return "C";
          break;
        default:
          return "error";
          break;
      }
    })
    .join("");
  return result;
}
const pairs = { A: "T", T: "A", C: "G", G: "C" };

const dna = "TAACG";
const DNAStrand = dna => dna.replace(/./g, a => pairs[a]);
console.log(DNAStrand(dna));
