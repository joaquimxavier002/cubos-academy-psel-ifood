function solucao(joao, andre) {
    // Escreva seu codigo aqui
   if (joao === "PEDRA" && andre === "TESOURA"){
   console.log ("JOAO");
 } else if (joao === "PAPEL" && andre === "PEDRA"){
   console.log ("JOAO");
} else if (joao === "TESOURA" && andre === "PAPEL"){
   console.log ("JOAO");
} else if (joao === andre) {
  console.log("EMPATE")
} else {
  console.log("ANDRE")
}
}