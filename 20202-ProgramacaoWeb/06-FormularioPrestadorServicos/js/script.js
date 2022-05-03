// desisto







/* Regras

- Campos NÃO obrigatórios: website;
- Campo nome não pode ter menos de 3 caracteres;
- Data final não pode ser menor ou igual à data inicial;
- Data inicial não pode ser menor do que a data atual;
- Campo e-mail deve estar num formato válido (nn@nn.nn);
- Campo website, se informado, deve estar num formato válido(http[s]://xxx.xx);
- O Campo atividades pretendidas deve possuir no mínimo uma e no máximo 3
atividades selecionadas;
- Caso a região de atuação selecionada seja a região centro-oeste, as
seguintes atividades pretendidas deverão ser desabilitadas: Programador e
DBA;

*/

let detec = false;

// Função para mostrar todos os erros no envio do formulário
function erro(e, id) {
    let tag = document.createElement("p")
    detec = true;
    tag.appendChild(document.createTextNode(e));
    document.getElementById("erros").appendChild(tag);
}

function formata() {
    let campos = document.formulario.atividade;
    
    // Remove todos os erros antigos primeiro
    const e_parent = document.getElementById("erros");
    while (e_parent.firstChild) {
        e_parent.removeChild(e_parent.lastChild);
    }

    // Checa se nome contém menos de 3 caracteres
    if (nome.value.length < 3) {
        erro("Nome deve conter no mínimo 3 letras.")
    }
    
    // Checa se a data final é igual a inicial
    if (Date.parse(datafim.value) <= Date.parse(dataini.value)) {
        erro("Data final é menor ou igual que inicial.")
    }

    // Checa se a data inicial é menor que a data atual
    if (Date.parse(dataini.value) < new Date().getTime()) {
        erro("Data inicial é menor que a data atual.")
    }
    
    if (detec) {
        return false;
    }
}

function campo() {
    let campos = document.formulario.atividade;
    let n_campos = 0;
    for (x=0; x < campos.length; x++) {
        if (campos[x].checked) {
            n_campos++;
        }
    }
    if (n_campos < 1 || n_campos > 3) {
        erro("Permitido no mínimo 1 a 3 campos selecionados");
    }
}
