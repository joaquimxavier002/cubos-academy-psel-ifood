function solucao(letra, palavras) {
let diferente = [];

for (let item of palavras) {
 if (item[0] !== letra) {
   diferente.push(item)
 } 
}
console.log(diferente.length)
};
