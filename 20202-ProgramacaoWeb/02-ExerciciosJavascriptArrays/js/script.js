// Desafio: Vamos fazer um programa de loteria. Crie uma função que sorteie 6 números de 1 a 60 e guarde-os num array. Depois peça para o usuário dizer 6 números, um de cada vez (pode usar um prompt) e guarde-os em uma outro array. Crie uma função que receba o array com os números informados pelo usuário e retorne quantos números ele acertou.
// Permita que ele realize quantas tentativas desejar. Quando, e se, ele acertar os 6 números diga para ele quantas tentativas foram necessárias…
// Consegue fazer uma interface bonita com o usuário? Fique a vontade para criar!!!!

function desafio() {
	let a = new Array(5); // Números escolhidos
	let b = new Array(5); // Números sorteados
	let c = 0; // Número de acertos da rodada
	let d = 0; // Tentativas
	let e = 0; // Maior número de acertos em uma rodada
	let z = true; // Tentar de novo
	while (z == true) {
		for (var i = 0; i <= 5; i++) {
			a[i] = prompt("Escolha o " + (i+1) + "º número entre 1 e 60", Math.floor(Math.random() * 60) + 1);
			b[i] = Math.floor(Math.random() * 60) + 1;
			if (a[i] == undefined || isNaN(a[i]) || a[i] == null || a[i] < 1 || a[i] > 60) {
				// Verifica se é um número
				a[i] = Math.floor(Math.random() * 60) + 1;
			}
			if (a[i] == b[i]) {
				c++;
			}
		}
		if(c >= e) {
			e = c;
		}
		d++;
		print.innerHTML = "Escolhidos: " + a.join(" ") + "<br>Sorteados: " + b.join(" ") + "<br>Acertos da rodada: " + c + "<br>Maior acerto: " + e + "<br>Tentativas: " + d;
		if (c == 6) {
			z = false;
			print.innerHTML = "Foram necessárias " + d + " tentativas para acertar todos os 6 números."
			} else {
			z = confirm("Quer tentar de novo?");
		}
		if (z == true) {
			c = 0;
		}
	}
}

// Grupo 3c: Faça uma função Javascript que receba um número real como argumento e retorne um valor com arredondamento às centésimas (2 dígitos). Atenção! estude o objeto Number.


function grupo_3c() {
	let a = parseFloat(prompt("Digite um número para mostrar seu às centésimas de 2 dígitos", (Math.random() * 1000).toFixed(4)));
	print.innerHTML = a.toFixed(2);
}

// Grupo 3b: Faça uma função Javascript que receba um número positivo ou negativo como argumento e retorne o valor absoluto desse número.

function grupo_3b() {
	let a = prompt("Digite um número para mostrar seu número absoluto", Math.floor(Math.random() * 1000) + 1)
	print.innerHTML = Math.abs(a);
}

// Grupo 3a: Faça uma função Javascript que receba como argumento um número que corresponde a um ângulo e devolva o seno desse ângulo.

function grupo_3a() {
	let a = prompt("Digite um número para mostrar seu seno", Math.floor(Math.random() * 360) + 1)
	print.innerHTML = Math.sin(a);
}

// Grupo 2h: Faça uma função Javascript que receba uma data como argumento e devolva quantos dias faltam para chegar nessa data.

function grupo_2h() {
	let a = Math.ceil((new Date((prompt("Ano",  new Date().getFullYear() + 1)), (prompt("Mês", "0")), (prompt("Dia", "1"))) - new Date().getTime()) / (60*60*24*1000));
	a > 0 ? print.innerHTML = "Faltam exatamente " + a + " dias." : print.innerHTML = "Já se passaram " + Math.abs(a) + " dias.";
}

// Grupo 2g: Faça uma função Javascript que receba uma data como argumento e devolva o ano.

function grupo_2g() {
	print.innerHTML = "Estamos no ano de " + new Date((prompt("Ano", new Date().getFullYear())), (prompt("Mês", new Date().getMonth())), (prompt("Dia", new Date().getDate()))).getFullYear() + ".";
}

// Grupo 2f: Faça uma função Javascript que receba uma data como argumento e devolva o mês entre [1,12].


function grupo_2f() {
	print.innerHTML = "Estamos no mês " + new Date((prompt("Ano", new Date().getFullYear())), (prompt("Mês", new Date().getMonth())), (prompt("Dia", new Date().getDate()))).getMonth() + ".";
}

// Grupo 2c: Faça uma função Javascript que receba uma data como argumento e devolva o dia do mês.

function grupo_2c() {
	print.innerHTML = "Hoje é dia " + new Date((prompt("Ano", new Date().getFullYear())), (prompt("Mês", new Date().getMonth())), (prompt("Dia", new Date().getDate()))).getDate() + ".";
}

// Grupo 2b: Faça uma função Javascript que receba uma data como argumento e devolva a data correspondente a uma semana depois da informada.


function grupo_2b() {
	print.innerHTML = new Date((prompt("Ano", new Date().getFullYear())), (prompt("Mês", new Date().getMonth())), (prompt("Dia", new Date().getDate() + 7)));
}

// Grupo 2a: Faça uma função Javascript que receba como argumento o dia, mês e ano e devolva um objecto data correspondente.

function grupo_2a() {
	print.innerHTML = new Date((prompt("Ano", new Date().getFullYear())), (prompt("Mês", new Date().getMonth())), (prompt("Dia", new Date().getDate())));
}

// Grupo 1d: Faça uma função que receba uma string e retorne TRUE caso a string informada tenha pelo menos 6 caracteres, pelo menos um caracter numérico e que tenha mais que 3 caracteres distintos, ou FALSE, caso contrário (nossa primeira tentativa de identificar um bom login).

function grupo_1d() {
	
}

// Grupo 1c: Faça uma função Javascript que receba uma string e retorne TRUE caso a string informada contenha um símbolo @ e pelo menos um símbolo ponto após o @ ou FALSE, caso contrário (isso será nossa primeira tentativa de validar um email).

function grupo_1c() {
	// let a = prompt("Digite seu e-mail", "Adolph.Blaine@gmail.com");
	// print.innerHTML = a.split("");
	
	// if () {
	// print.innerHTML("TRUE")
	// } else {
	// print.innerHTML("FALSE")
	// }
}

// Grupo 1b: Faça uma função Javascript que receba uma string com um nome completo e devolva uma string com o primeiro e último nome.


function grupo_1b() {
	let a = prompt("Digite seu nome completo para mostrar o primeiro e último nome", "Adolph Blaine Charles David");
	print.innerHTML = a.split(" ").shift() + " " + a.split(" ").pop();
}

// Grupo 1a: Faça uma função Javascript que receba uma string e retorne a string inversa

function grupo_1a() {
	let a = prompt("Digite algo para reverter", "Olá Mundo!");
	print.innerHTML = a.split("").reverse().join("");
}

// ============================|| Exemplos ||=============================== //

// Exemplo Sort() Match.random()

function exemplo_sort_random() {
	let a = new Array();
	for (var i = 0; i <= 50; i++) {
		a[i] = Math.floor(Math.random() * 100) + 1
	}
	print.innerHTML = a.sort(function(a, b){return b-a});
}
// Exemplo Date()

function exemplo_date() {
	print.innerHTML = new Date();
}

function exemplo_up_lowercase() {
	let a = prompt("Digite algo para mostrar o texto em caixa alta e baixa", "oLÁ muNdO!");
	print.innerHTML = a.toUpperCase() + "<br>" + a.toLowerCase();
}

// Exemplo lenght

function exemplo_length() {
	let a = prompt("Digite algo para mostrar o número de caracteres totais", "Olá Mundo!")
	print.innerHTML = "Há " + a.length + " caracteres em &quot" + a + "&quot.";
}

// Exemplo NaN

function exemplo_nan() {
	let a = prompt("Digite algo para mostrar se é um número ou não", Math.floor(Math.random() * 1000));
	isNaN(a) ? print.innerHTML = "&quot" + a + "&quot não é um número." : print.innerHTML = "&quot" + a + "&quot é um número.";
}

// Exemplo eval
function exemplo_eval() {
	let expressao = document.getElementById('texto').value;
	eval(expressao);
}	