var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //add evento de digitacao
    console.log(this.value);
    var todosPacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for( var i = 0; i < todosPacientes.length ; i++){
            var paciente = todosPacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //expressão regular recebe dois parametros, 1 - o que vc quer q ela busque 2 - como quer q busque (case sensitive ou insensitive)
            if( !expressao.test(nome)){ // para a funcao test, passo o que quero testar
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for( var i = 0; i < todosPacientes.length ; i++){
            var paciente = todosPacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

    

});