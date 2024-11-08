var receita=[];
var despesa=[];

var adicionar="sim";
var i=0;

var totalReceita=0, totalDespesa=0;;

while(adicionar=="sim"){

    receita[i]=parseFloat(prompt(" Adicione um item à listta de receitas: "));
    i++;

    adicionar=prompt(" Deseja adicionar mais itens? ")

}

var adicionar="sim";
var i=0;

while(adicionar=="sim"){

    despesa[i]=parseFloat(prompt(" Adicione um item à listta de receitas: "));
    i++;

    adicionar=prompt(" Deseja adicionar mais itens? ")

}

while(i<receita.length){
    totalReceita+=receita[i]
    i++;

}

console.log(" Total de receita: ");

i=0;

while(i<despesa.length){
    totalDespesa+=despesa[i]
    i++;

}

console.log(" Total de despesa: ");
console.log(" Total da diferença : + " (totalReceita-totalDespesa));