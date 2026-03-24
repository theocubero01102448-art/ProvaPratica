//crie uma condicional para salario maior ou igual a 3000 "alto" maior ou igual a 1500 "medio" se não baixo
let salario = 3500;
let resultado = "";
if (salario >= 3000) {
  resultado = "alto";
} else if (salario >= 1500) {
  resultado = "medio";
} else {
  resultado = "baixo";
}
console.log(resultado);