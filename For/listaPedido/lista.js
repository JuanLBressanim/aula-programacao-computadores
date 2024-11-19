var listaLanches=[
    {codigo: 1, nome: Hamburguer, valor: 10 },
    {codigo: 2, nome: X-salada, valor: 15 },
    {codigo: 3, nome: X-bacon, valor: 20 },
]

console.log(" Código | Nome | Valor ")
for(var i=0;i<listaLanches.length;i++){
    console.log(listaLanches[i].codigo, " | " ,listaLanches[i].nome, " | " ,listaLanches[i].valor);

};

var codigo=parseInt(prompt(" Escolha o código do pedido: "));
var achou=false;
for(var i=0;i<listaLanches.length;i++){
    if(codigo==listaLanches.codigo){
        console.log("\n PEDIDO: \N")
        console.log(listaLanches[i].codigo, " | " ,listaLanches[i].nome, " | " ,listaLanches[i].valor);
        achou=true;

    }
}

if(achou==false){
    console.log(" \n PEDIDO INCORRETO \N " );
    
}