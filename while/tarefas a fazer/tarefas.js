var tarefas=[];

var resposta="sim";
var i=0; 

while(resposta=="sim"){
    tarefas[i]=prompt(" Adicione uma tarefa: ");
    i++;

    resposta = prompt(" Deseja adicionar mais alguma tarefa? ");

}

i=0;

while (i < tarefas.length){
    console.log(" Tarefas " + (i + 1) + ": ",tarefas[i]);
    i++;

};

