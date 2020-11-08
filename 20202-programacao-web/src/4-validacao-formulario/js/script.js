/*
	Validação de formulário de login
	
	Crie um documento HTML contendo um formulário com os seguintes campos:
	- Login
	- Senha
	- Checkbox de aceite dos termos e bla bla bla.
	
	Regras:
	
	Senha: string informada tenha pelo menos 6 caracteres, pelo menos um caracter numérico e que tenha mais que 3 caracteres repetidos. Não pode haver espaço, Não pode haver repetição sequencial de caracteres numéricos (1111, 222, 55555).
	
	Login: string informada deve ter no mínimo 3 e no máximo 20 caracteres. Não pode ter os caracteres: - ' . " / \ § @ e espaço
	
	Checkbox deve obrigatoriamente estar marcado. Enquanto o checkbox não estiver marcado, o botão de submissão do formulário deverá estar desabilitado.
	
	Caso alguma das condições acima não forem satisfeitas o formulário não poderá ser submetido.
	
	Defina a melhor forma de apresentar os erros ao usuário. faça uso de DOM e conteúdo dinâmico para melhorar a usabilidade do sistema.
*/

function checkbox() {
	if (document.getElementById("termos").checked == true) {
		document.getElementById("error_termos").innerHTML = "";
		document.getElementById("login").disabled = false;
		document.getElementById("login").style.opacity = "1";
		} else {
		document.getElementById("error_termos").innerHTML = "Você precisa aceitar os termos de uso.";
		document.getElementById("login").disabled = true;
		document.getElementById("login").style.opacity = "0.7";
	}
}

function validar(formulario) {
	let especial = ["-", "'", ".", "\"", "/", "\\", "§", "@", " ", "#"];
	let especial_detectados = [];
	let numero = false;
	let repetidos = 0;
	let d_repetidos =  password.value.split('');
	
	// Verifica de há caracteres repetidos
	// Separa a senha em uma array e verifica compara se o dígito anterior é igual ao atual
	for (let n = -1; n < password.value.length; n++) {
		if (d_repetidos[n] == d_repetidos[n - 1]) {
			repetidos++;
		}
	}
	
	for (let n = 0; n < password.value.length; n++) {
		// c_pass_atual: caractere no input password atual
		let c_pass_atual = password.value.charAt(n);
		
        // Verifica se há um caractere especial
        // Percorre a senha e também compara e percorre cada caractere na array especial[]
        for (z = 0; z < especial.length; z++) {
			if (c_pass_atual.includes(especial[z])) {
				// Guarda os caracteres digitados não permitidos em especial_detectados[]
				especial_detectados.push(especial[z]);
			}
		}
		
		// Verifica se pelo menos há um caractere numérico
		// Percorre a senha e o valor é true se pelo menos um número for achado
		if (!isNaN(parseInt(c_pass_atual))) {
			numero = true;
		}
	}
	
	let err_user = document.getElementById("error_user");
	let err_pass = document.getElementById("error_password");

	if (user.value.length < 3 || user.value.length > 20) {
		err_pass.innerHTML = "";
		err_user.innerHTML = "Nome de usuário precisa ser entre 3 a 20 caracteres.";
		return false;
		} else if (password.value.length < 6) {
		err_user.innerHTML = "";
		err_pass.innerHTML = "Senha precisa ser no mínimo 6 caracteres.";
		return false;
		} else if (!numero) {
		err_user.innerHTML = "";
		err_pass.innerHTML = "Senha precisa ter pelo menos um caractere numérico.";
		return false; 
		} else if (repetidos >= 3) {
		err_user.innerHTML = "";
		err_pass.innerHTML = "Senha não pode conter mais de 3 caracteres repetidos.";
		return false;
		} else if (especial_detectados.length > 0) {
		err_user.innerHTML = "";
        err_pass.innerHTML = especial_detectados.length == 1 ? "O caractere especial \"" + especial_detectados + "\" não é permitido." : "Os caracteres especiais \"" + especial_detectados.join(" ") + "\" não são permitidos.";
		return false;
	}
	alert("Formulário enviado.");
	return true;
}