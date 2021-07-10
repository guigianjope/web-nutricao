var todosPacientes = document.querySelectorAll(".paciente");
//console.log(todosPacientes);
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){ //add evento de duplo clique
    event.target.parentNode.classList.add("fadeOut"); //classlist para adicionar um efeito do css no js

    setTimeout(function(){
        event.target.parentNode.remove(); //event.target é o alvo do clique, ou seja a TD, mas eu devo remover a linha (TR), então uso parentNode (pai do alvo) + remove
    }, 500);
    
});

/* 
todosPacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){ //add evento de duplo clique em cada linha
        //console.log("Fui clicado com duplo click");
        this.remove(); //this se refere ao paciente, é o dono do evento
    });
});
 */