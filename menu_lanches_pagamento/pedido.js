var cardapioLanche="  Cardápio de lanches:  \n";

cardapioLanche=" Código | Nome | Preço \n";

cardapioLanche+="    1   | X-SALADA | R$ 20,00 \n";
cardapioLanche+="    2   | X-BACON | R$ 25,00 \n";
cardapioLanche+="    3   | X-TUDO | R$ 23,00 \n";
cardapioLanche+="    4   | BAURU | R$ 29,99 \n";
cardapioLanche+="    5   | AMERICANO | 22,50 \n";
cardapioLanche+=" Digite o código do pedido: ";

var pedidoLanche=parseInt(prompt(cardapioLanche))
var quantiLanche=parseInt(prompt(" Digite a quantidade de lanches: "));
var cardapioBebida="   Cardápio de bebidas:  \n";

cardapioBebida=" Código |         Nome      | Preço \n";
cardapioBebida+="   1   | Refrigerante Lata | R$ 5,00 \n";
cardapioBebida+="   2   | Refrigerante 2L   | R$ 10,00 \n";
cardapioBebida+="   3   | Agua              | R$ 3,50 \n";
cardapioBebida+="   4   | Suco              | R$ 7,50 \n";
cardapioBebida+=" Digite o código do pedido: ";

var pedidoBebida=parseInt(prompt(cardapioBebida))
var quantiBebida=parseInt(prompt(" Digite a quantidade de bebidas "));

valorTotal=0

if(pedidoLanche==1){
    var ValorTotal=quantiLanche*20;
    
    console.log("\n Pedido: \n");
    console.log(" Valor do lanche: R$20,00");
    console.log(" Quantidade: " +quantiLanche);
}else if(pedidoLanche==2){
    var ValorTotal=quantiLanche*25;

    console.log("\n Pedido: \n");
    console.log(" Valor do lanche: R$25,00");
    console.log(" Quantidade: " +quantiLanche);

}else if(pedidoLanche==3){
    var ValorTotal=quantiLanche*23;

    console.log("\n Pedido: \n");
    console.log(" Valor do lanche: R$23,00");
    console.log(" Quantidade: " +quantiLanche);

}else if(pedidoLanche==4){
    var ValorTotal=quantiLanche*29.99;

    console.log("\n Pedido: \n");
    console.log(" Valor do lanche: R$29,99");
    console.log(" Quantidade: " +quantiLanche);

}else if(pedidoLanche==5){
    var ValorTotal=quantiLanche*22.50;

    console.log("\n Pedido: \n");
    console.log(" Valor do lanche: R$22,50");
    console.log(" Quantidade: " +quantiLanche);

}else{
    console.log(" Digite o código corretamente. ");
}

if(pedidoBebida==1){
    var ValorTotal=quantiLanche*25;

    console.log("\n Pedido: \n");
    console.log(" Valor do lanche: R$25,00");
    console.log(" Quantidade: " +quantiLanche);
}