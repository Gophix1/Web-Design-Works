function validar() {
	var res = []; // Array que guardará cada resposta
	
	var strLogin = document.getElementById("login").value;
	var strNome = document.getElementById("nome").value;
	var strEmail = document.getElementById("email").value;
	var strTelefone = document.getElementById("telefone").value;
	var strData = document.getElementById("data").value;
	
	var regexLogin = /^[a-z0-9_]{5,10}$/;
	var regexNome = /^[a-zA-Z]{2,}$/;
	var regexEmail = /^[^@][a-z0-9_\.]{3,}@[a-z]{3,20}\.[a-z]{1,10}[^@]$/;
	var regexTelefone = /^[0-9]{3,4}-[0-9]{4}$/;
	var regexData = /^[0-9][1-9]\/[0-9][1-9]\/[0-9]{4}$/;
	
	// Cada resposta adiciona um novo elemento na array
	regexLogin.test(strLogin) ? res.push("Login: válido") : res.push("Login: inválido");
	regexNome.test(strNome) ? res.push("Nome: válido") : res.push("Nome: inválido");
	regexEmail.test(strEmail) ? res.push("E-mail: válido") : res.push("E-mail: inválido");
	regexTelefone.test(strTelefone) ? res.push("Telefone: válido") : res.push("Telefone: inválido");
	regexData.test(strData) ? res.push("Data: válida") : res.push("Data: inválida");
	
	alert(res.join('\n')); // Cada elemento da array é juntada em texto e adicionado uma nova linha
}

// LOGIN
// Permitir apenas letras minúsculas, números e o caractere "_" (underscore).
// Deve ter de 5 a 10 caracteres.

// NOME
// Permite apenas letras e apenas a primeira letra deve ser maiúscula
// Deve ter no mínimo 2 caracteres

// E-MAIL
// Permitir letras minúsculas, números, undersocre "_" e ponto final ".";
// Deve conter uma e apenas uma arroba "@" que não esteja nem no início nem no fim da string
// Deve ter no mínimo 3 caracteres

// TELEFONE
// Permite apenas números 
// O quarto caracter deve ser o caractere "-"
// Deve ter exatamente 8 caracteres
// Exemplo: 999-9999

// DATA
// Deve ter dois números, o caractere "/" , mais dois números , o caractere "/" novamente , e mais quatro números
// Exemplo: 99/99/9999
