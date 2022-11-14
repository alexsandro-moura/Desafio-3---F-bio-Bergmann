//Respondendo ao desafio 3 proposto na página do Instagram do @fabiocberg Fábio Bergmann

/*O objetivo do desafio é criar uma função que receba seis parâmetros
e realize uma série de operações com esses parâmetros:
1 - soma A e B
2 - subtrair o resultado por C
3 - multiplicar por D e dividir por E
4 - o resultado será elevado a F
*/

function desafio3 (a, b, c, d, e, f){
	return((((a+b)-c)*d/e)**f)
}
console.log (desafio3(6, 5, 4, 3, 2, 1));
console.log (desafio3(7, 8, 9, 10, 11, 12));
console.log (desafio3(20, 30, 40, 50, 60, 70));