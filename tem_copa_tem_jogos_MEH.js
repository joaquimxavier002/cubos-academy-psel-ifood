function solucao(ano) {
    resto = ano % 2
restoDois = ano % 4
if (resto != 0) {
  console.log("MEH")
} else if (restoDois === 0) {
  console.log ("JOGOS")
} else {
  console.log("COPA")
}
}