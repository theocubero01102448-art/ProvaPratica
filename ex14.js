//crie uma condicional para avaliar uma nota: maior ou igual a 3000 "alto" maior ou igual a 1500 "medio" senão "baixo"
let nota = 2000;
let resultado = "";
if (nota >= 3000) {
  resultado = "alto";
} else if (nota >= 1500) {
  resultado = "medio";
} else {
  resultado = "baixo";
}
console.log(resultado);