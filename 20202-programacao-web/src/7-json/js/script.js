function requisitar() {
	document.getElementById('procurar').addEventListener('click', () => {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					var resposta = JSON.parse(xhr.responseText) // xhr.responseText ---- JSON.parse(xhr.responseText)
					console.log(resposta); // Verifica o JSON atual no log
					document.getElementById('result').innerHTML = resposta;
					
					if (resposta) {
						var i;
						var texto = "";
						var subindex;
						if (!resposta.results && !resposta.desc && !resposta.hit_points) { // Mostra todos os objetos
							for (i = 0; i < Object.keys(resposta).length; i++) {
								texto += "<p>" + Object.keys(resposta)[i] + "</p>";
							}
						} 
						
						if (resposta.results) {
							subindex = Object.keys(resposta.results[0]).indexOf('name');
							texto += "<p>" + resposta.count + " itens encontrados</p>";
							for (i = 0; i < resposta.results.length; i++) {
									texto += "<p>" + Object.keys(resposta.results[i])[subindex] + ": " + Object.values(resposta.results[i])[1] + "<br>" + Object.values(resposta.results[i])[2] + "</p>";
									//texto += "<p>" + Object.keys(resposta.results[i])[1] + ": " + Object.values(resposta.results[i])[1] + "<br>" + Object.values(resposta.results[i])[2] + "</p>";
								}
						}
						
						if (resposta.desc) { // Se há descrição ex: spells/acid-arrow
							texto += "<p>Descrição de <u>" + resposta.name + "</u><br><br>" + resposta.desc + "</p>";
						}
						
						if (resposta.hit_points) { // Monstros específicos
							for (i = 0; i < Object.keys(resposta).length; i++) {
								texto += "<p>" + Object.keys(resposta)[i] + ": " + Object.values(resposta)[i] + "</p>";
							}
						}
						document.getElementById('result').innerHTML = texto;
					}
					
					/*if (resposta.count) {
						var i;
						var texto = "";
						for (i = 0; i < resposta.results.length; i++) {
							texto += "<p>" + resposta.results[i].name + "</p>";
						}
						document.getElementById('result').innerHTML = texto;
					}*/

					// if (resposta.languages == "/api/languages") {
						// document.getElementById('result').innerHTML = "Correto!";
					// }
				}
				if (xhr.status === 404) {
					document.getElementById('result').innerHTML = "Requisição não encontrada.";
				}
			}
		}
		xhr.open('GET', 'https://www.dnd5eapi.co/api/' + document.getElementById('campo').value, true)
		xhr.send();
		
	})
}