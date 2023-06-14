let codigo = "3 - 14 - 12 - 15 - 20 - 19 - 1 - 4 - 14 - 17";
let substituir = {
  1: "a",
  3: "c",
  4: "d",
  12: "m",
  14: "o",
  15: "p",
  17: "r",
  19: "t",
  20: "u"
};

for (let chave in substituir) {
  codigo = codigo.replace(new RegExp(chave, "g"), substituir[chave]);
}

console.log("Palavra gerada: " + codigo);