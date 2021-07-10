let pacientes = document.querySelectorAll(".paciente"); //queryselectorall permite trazer uma lista/array

for(var i = 0 ; i < pacientes.length ; i++){ //length retorna o tamanho do array

    var paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let altura = paciente.querySelector(".info-altura").textContent;

    let tdImc = paciente.querySelector(".info-imc");

    let pesoEhvalido = validaPeso(peso); //true ou false
    let alturaEhvalida = validaAltura(altura);


    if(!pesoEhvalido){
        pesoEhvalido = false;
        tdImc.textContent = "Peso Inválida";
        paciente.style.backgroundColor = "lightcoral"; //.style para alterar alguma propriedade do css no js. detalhe para propriedades css separadas por traço, nesse caso, a primeira letra da segunda palavra deve ser maiuscula
    }

    if(!alturaEhvalida){
        alturaEhvalida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido"); // porém a boa pratica seria usar um .classlist.add para adicionar uma classe definida no css
    }


    if(alturaEhvalida && pesoEhvalido){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc; 
    }

}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //tofixed define qtas casas decimais serao exibidas
}