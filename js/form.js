//botão - add novo paciente
const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){ //addeventlistener para adicionar um evento, neste caso o acionado por um click no botao, e o evento é a funçao q vem a seguir
    event.preventDefault(); //event - depreciado / preventDefault para tirar a função padrao do botao de recarregar a pagina
    

    var form = document.querySelector("#form-adiciona");
    //extraindo info do paciente do form
    var paciente = obtemPacienteDoForm(form);

    var erros = validaPaciente(paciente);

    //validação de peso e altura
    if(erros.length > 0){
        exibeMsgsDeErros(erros);      
        return; //ao adcionar um return aqui, caso o paciente seja inválido o codigo termina aqui
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); //função q limpa os campos após o envio 

    var msgsErro = document.querySelector("#msgs-erro");
    msgsErro.innerHTML = ""; //innerHTML permite controlar o html interno de um elemento - aqui foi atribuido um valor vazio, para q as msgs anteriores sejam apagadas após um novo paciente adicionado
});


function adicionaPacienteNaTabela(paciente) {
    // cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);
    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMsgsDeErros(erros){
    var ul = document.querySelector("#msgs-erro");
    ul.innerHTML = ""; //innerHTML permite controlar o html interno de um elemento - aqui foi atribuido um valor vazio, para q as msgs anteriores sejam apagadas antes das novas serem exibidas

    erros.forEach(function(erro){ //para cada item do array, executa a função
        var li = document.createElement("li"); //função cria um li com o conteudo do array
        li.textContent = erro;
        ul.appendChild(li); //colocar a li dentro da ul
    });
}

/* const btnEdit = document.querySelector("info-edit");
btnEdit.innerHTML = '<i class="fas fa-trash-alt"></i>'; 

console.log(btnEdit);

btnEdit = document.innerHTML += `<i class="fas fa-trash-alt"></i>`; */

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)/* ,
        opcoes: btnEdit */
    }
    return paciente;
}


function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    
    //colocar os td's dentro da tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    /* pacienteTr.appendChild(montaTd(paciente.opcoes, "info-opcoes")); */

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O Campo NOME deve ser preenchido.")
    }

    if(paciente.peso.length ==0){
        erros.push("O Campo PESO deve ser preenchido.");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }

    if(paciente.altura.length ==0){
        erros.push("O Campo ALTURA deve ser preenchido.");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("O Campo GORDURA deve ser preenchido.")
    }

    return erros;
}

