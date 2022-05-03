let teste = ['pera','maça','laranja','melao'];

console.log('da forma tradicional....');
for(let idx = 0; idx < teste.length; idx++){
	console.log(idx, teste[idx]);
}

for (let item of teste){
	console.log('para os militantes',item);
}

console.log('percorrendo utilizando programação funcional');
teste.forEach((val, idx) => {
	console.log('função lambda',idx, val);
});

teste.forEach(function (val,idx){
	console.log('funcao anônima',val,idx);
});

let iterarArray = function(val,idx){
	console.log('loucura', val,idx);
}


teste.forEach(iterarArray);

function validarEmail(email){
	let idxArroba = email.indexOf('@');
	if (idxArroba < 0) {
		return false;
	}
	
	let parte = email.split('@')[1];
	
	let idxPonto = parte.indexOf('.');
	
	if (idxPonto < 0){
		return false;
	}
	
	return true;
	
}


function validarLogin(login){
	// primeira regra: ao menos 6 caracteres
	
	if (login.length < 6) {
		return false;
	}
	
	// segunda regra: pelo menos um caracter numérico
	let encontrouNumero = false;
	
	for (let x = 0; x < login.length; x++ ) {
		let resultado = parseInt(login.charAt(x));
		if (!isNaN(resultado)){
			encontrouNumero = true;
		}
	}
	
	if (!encontrouNumero){
		return false;
	}
	
	//terceira regra: mais do que 3 caracteres distintos
	let distintos = [];
	for (let x = 0; x < login.length; x++ ) {
		let letra = login.charAt(x);
		if (!distintos.includes(letra)) {
			distintos.push(letra);
		}
	}
	
	if (distintos.length < 3) {
		return false;
	}
	
	return true;
	
}

function loteria() {
	let numeros = [];
	do {
		let numero = Math.floor(Math.random()*60)+1;
		if (!numeros.includes(numero)){
			numeros.push(numero);
		}
	} while (numeros.length < 6);
	return numeros;
}

function conferirJogo(numerosSorteados, numerosApostados){
	let totalAcertos = 0;
	numerosApostados.forEach(numero => {
		if (numerosSorteados.includes(numero)) {
			totalAcertos++;
		}
	});
	return totalAcertos;
}