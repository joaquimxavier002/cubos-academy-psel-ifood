function solucao(produtos) {
let cont = 0;
let caro = 0 

for (let item of produtos) {
cont += item.preco;
  if (item.preco >= 10000) {
    caro += item.preco; 

  }
}
 
 const resposta = {
  totalTop: caro,
  percentual: caro / cont,
 };
 
 console.log(resposta)
}