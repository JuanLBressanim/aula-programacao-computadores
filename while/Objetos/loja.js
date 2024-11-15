var produtos=[];

var i=0;
var condicao=1;

while(condicao){
    // Cria o podruto vazio que vamos preencher.
    var produto={};

    produto.codigo=i+1 // como o i começa em zero, aumentamos em 1;
    produto.nome=prompt(" Digite o nome do produto: ");
    produto.preco=prompt(" Digite o preço: ");

    produtos[i]=produto;

    condicao=parseInt(prompt(" Digite 1 para adicionar mais produtos \n Digite 0 para sair "));
    i++;

}

//console.log(produtos);

// Como imprimir o segundo produto da lista.

console.log(" PRODUTOS CADASTRADO \n ");
console.log("-----------------")

for(var i=0; i<produtos.length; i++){
    console.log(" Código: ", produtos[i].codigo);
    console.log(" Nome: ", produtos[i].nome);
    console.log(" Preço: ", produtos[i].preco);
    console.log("-----------------")
}
