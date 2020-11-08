// Exercício 20: Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.

function ex_20() {
	var qat = window.prompt("Insira a quantidade atual de estoque:");
	var qma = window.prompt("Insira a quantidade máxima de estoque:");
	var qmi = window.prompt("Insira a quantidade mínima de estoque:");
	qat = parseInt(qat);
	qma = parseInt(qma);
	qmi = parseInt(qmi);
	var qme = (qma + qmi) / 2;
	if (qat >= qme) {
		window.alert("Não efetuar compra.\nEstoque atual: " + qat + "\nQuantidade média: " + qme);
	} else {
		window.alert("Efetuar compra.\nEstoque atual: " + qat + "\nQuantidade média: " + qme);
		}
}

// Exercício 19: Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

function ex_19() {
	var s = window.prompt("Insira seu saldo atual:");
	var d = window.prompt("Insira seu débito atual:");
	var c = window.prompt("Insira seu crédito atual:");
	s = parseInt(s);
	d = parseInt(d);
	c = parseInt(c);
	var r = s - (d + c);
	if (r >= 0) {
		window.alert("Saldo Positivo.\nSaldo atual: R$ " + r + ".");
	} else {
		window.alert("Salvo Negativo.\nSaldo atual: R$ " + r + ".");
		}
}

// Exercício 18:  Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.

function ex_18() {
	var s = window.prompt("Digite o valor de seu salário:");
	if (s <= 1500) {
		window.alert("Salário com comissão de 3%: R$ " + (s * (1 + 3 / 100)) + ".");
	} else if (s > 1500) {
		window.alert("Salário com comissão de 8%: R$ " + (s * (1 + 8 / 100)) + ".");
	} else {
		window.alert("Salário: R$ " + s + ".")
		}
}

// Exercício 17:  A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).

function ex_17() {
	
}

// Exercício 16: Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

function ex_16() {
	var n1 = window.prompt("Insira o 1º valor:");
	var n2 = window.prompt("Insira o 2º valor:");
	if (n1 > n2) {
		window.alert(n2 + ", " + n1 + ".");
	} else if (n2 > n1) {
		window.alert(n1 + ", " + n2 + ".");
	} else {
		window.alert("Os números são iguais.");
		}
}

// Exercício 15: Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

function ex_15() {
	var n1 = window.prompt("Insira o 1º valor:");
	var n2 = window.prompt("Insira o 2º valor:");
	if (n1 > n2) {
		window.alert(n1 + " é o maior número.");
	} else if (n2 > n1) {
		window.alert(n2 + " é o maior número.");
	} else {
		window.alert("Os números são iguais.");
		}
}

// Exercício 14: Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

function ex_14() {
	var n = window.prompt("Em que ano você nasceu?")
	var y = new Date().getFullYear() - n;
	if (y >= 18) {
	window.alert("Você poderá votar este ano.\nMeus cálculos me dizem que você tem " + y + " anos.")
	} else {
	window.alert("Você não poderá votar este ano.\nMeus cálculos me dizem que você tem " + y + " anos.")
		}
}

// Exercício 13:  Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado).

function ex_13() {
	var n1 = window.prompt("Qual foi a 1ª nota?");
	var n2 = window.prompt("Qual foi a 2ª nota?");
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	if ((n1 + n2) / 2 >= 6) {
	window.alert("Parabéns, você foi aprovado!\nMédia: " + ((n1 + n2) / 2));
	} else {
		window.alert("Infelizmente você não foi aprovado.\nMédia: " + ((n1 + n2) / 2));
		}
}

// Exercício 12: As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.

function ex_12() {
	var n = window.prompt("Quantas maçãs foram compradas?");
	if (n <= 12) {
	window.alert("Você gastou R$ " + n * 1.30);
	} else {
		window.alert("Você gastou R$ " + n * 1.00);
		}
}

// Exercício 11: Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).

function ex_11() {
	var n = window.prompt("Digite um número:");
	if (n >= 0) {
		window.alert("Este é um número positivo.");
	} else {
		window.alert("Este é um número negativo.");
		}
}

// Exercício 10: Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!

function ex_10() {
	var n = window.prompt("Escolha um número de 0 a 20:");
	if (n > 10) {
		window.alert("É MAIOR QUE 10!");
	} else {
		window.alert("NÃO É MAIOR QUE 10!");
		}
}

// Exercício 9: Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:

function ex_09() {
		var n1 = window.prompt("Insira a 1ª nota:");
		var n2 = window.prompt("Insira a 2ª nota:");
		var n3 = window.prompt("Insira a 3ª nota:");
		window.alert("Sua média foi nota " + ((n1 * 2 + n2 * 3 + n3 * 5) /10) + ".")
	}

// Exercício 8:  Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo):


function ex_08() {
		var f = window.prompt("Insira a temperatura em Fahrenheit:")
		window.alert(((f - 32) * 5 / 9) + " ºC");
	}
	
// Exercício 7: Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

function ex_07() {
	/*var sal = window.prompt("Quanto é o salário fixo?");
	var car = window.prompt("Qunatos carros foram vendidos?");
	var vt_car = window.prompt("Qual é o valor total arrecadado com as vendas dos carros?");
	var v_rec = window.prompt("Quando você recebe por carro vendido?");*/
}

// Exercício 6:  O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. 

function ex_06() {
	var c_fab = window.prompt("Qual o custo de fábrica do seu carro?");
	c_fab = parseInt(c_fab);
	window.alert("O custo do seu carro vai ser R$ " + (c_fab + (c_fab * 45 / 100 + c_fab * 28 / 100)));
}

// Exercício 5: Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

function ex_05() {
	var sal = window.prompt("Qual é seu salário atual?");
	var por = window.prompt("Qual foi a porcentagem de reajuste?");
	sal = parseInt(sal);
	por = parseInt(por);
	window.alert("Seu novo salário é de R$ " + (sal * (1 + por / 100)) + ".");
}

// Exercício 4: Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

function ex_04() {
	var e = window.prompt("Qual o número total de eleitores?", "3000");
	var vb = window.prompt("Quantos votos EM BRANCO foram contabilizados?", "750");
	var vn = window.prompt("Quantos votos NULOS foram contabilizados?", "150");
	var vv = window.prompt("Quantos votos VÁLIDOS foram contabilizados?", "1500");
	
	e = parseInt(e);
	vb = parseInt(vb);
	vn = parseInt(vn);
	vv = parseInt(vv);
	
	var re = vb + vn + vv; // Calcula o total de votantes
	var rne = e - re; // Calcula o total de não votantes
		
	if (e >= + vb + vn + vv) {
	window.alert((vb * 100 / e) + "% votaram em branco.\n" + (vn * 100 / e) + "% anularam o voto.\n" + (vv * 100 / e) + "% de votos válidos.\n" + (rne * 100 / e) + "% não votaram.");
	} else {
		window.alert("Há mais votos que eleitores!\nVotos totais: " + re + "\nEleitores: " + e);
		}
}

// Exercício 3: Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

function ex_03() {
	var a = window.prompt("Digite sua idade em anos:");
	a *= 365;
	var m = window.prompt("Digite o mês atual:");
	m *= 30;
	var d = window.prompt("Digite o dia de hoje:");
	window.alert("Sua idade total em dias é de " + (+a + +m + +d) + " dias.");
}

// Exercício 2: Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

function ex_02() {
	var a;
	var b = window.prompt("Digite a base do retângulo:");
	var h = window.prompt("Digite a altura do retângulo:");
	window.alert("A área total do retângulo é " + (a = b * h) + ".");
}

// Exercício 1: Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.

function ex_01() {
	var x = window.prompt("Digite um número para mostrar seu antecessor:");
	window.alert("O antecessor de " + x + " é " + (x -= 1) + ".");
}

// Exemplo repetição
function exemplo_for() {
	for (i = 0; i <= 100; i++) {
			document.write(i + " ");
		}
}

// Exemplo document.write
function document_write() {
	document.write("Olá mundo!");
}

// Exemplo window.alert
function window_alert() {
	window.alert("Olá mundo!");
}

// Exemplo window.open
function window_open() {
	window.open("https://google.com","","width=400, height=400");
}