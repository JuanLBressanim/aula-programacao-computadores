var listaLanches=[
    {codigo:1, nome:"Hamburguer", valor:10 },
    {codigo:2, nome:"X-salada", valor:15 },
    {codigo:3, nome:"X-bacon", valor:20 },
];

listaPedido=[];

console.log( "        LANCHES       ");
console.log("Código |    Nome    | Valor ");
for(var i=0; i<listaLanches.length; i++){
    console.log(`${listaLanches[i].codigo}  |  ${listaLanches[i].nome}  | R$ ${listaLanches[i].valor}`);

};

var pedido=0;
listaPedido=[];

var adicionar="sim";

while(adicionar=="sim"){
  var codigoLanches=parseInt(prompt(" Digite o código do lanche: "));
  var quantiLanches=parseInt(prompt(" Digite a quantidade de lanches: "));

 for(i=0; i<listaLanches.length;i++){
   if(codigoLanches==listaLanches[i].codigo){
        listaPedido[pedido]=listaLanches[i];
        listaPedido[pedido].quantidade=quantiLanches;

   };
 };

  adicionar=prompt(" Deseja adicionar mais lanches? ");
  pedido++;

};

var listaBebidas=[
    {codigo:1, nome:"Refrigerante", valor:10 },
    {codigo:2, nome:"Suco", valor:15 },
    {codigo:3, nome:"Àgua", valor:20 },
];

listaPedido=[];

console.log( "        BEBIDAS       ");
console.log("Código |    Nome    | Valor ");
for(var i=0; i<listaBebidas.length; i++){
    console.log(`${listaBebidas[i].codigo}  |  ${listaBebidas[i].nome}  | R$ ${listaBebidas[i].valor}`);

};

var pedido=0;
listaPedido=[];

var adicionar="sim";

while(adicionar=="sim"){
  var codigoBebidas=parseInt(prompt(" Digite o código da bebida: "));
  var quantiBebidas=parseInt(prompt(" Digite a quantidade de bebidas: "));

 for(i=0; i<listaLanches.length;i++){
   if(codigoLanches==listaBebidas[i].codigoBebidas){
        listaPedido[pedido]=listaBebidas[i];
        listaPedido[pedido].quantidade=quantiBebidas;

   };
 };

  adicionar=prompt(" Deseja adicionar mais lanches? ");
  pedido++;

};

var totalPedido=0;

for(i=0;i<listaPedido.length;i++;){
    totalPedido=listaPedido[i].valor*listaPedido[i].quantidade
}

console.log(totalPedido);