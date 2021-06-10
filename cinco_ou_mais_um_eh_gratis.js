function solucao(precos) {
    //seu codigo aqui
    let soma = 0;
let menor = precos[0];
let totalComDesconto = 0;

if (precos.length < 5) {
 for (let i = 0; i < precos.length; i++) {
   soma += precos[i];
 }
 console.log(soma)
} else {
  for (let i = 0; i < precos.length; i++) {
    soma += precos[i];
    if (precos[i] < menor) {
      menor = precos[i]
    };
 }
 totalComDesconto = soma - menor
 console.log(totalComDesconto)
};

};