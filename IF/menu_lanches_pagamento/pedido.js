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
var valorLanche=0;

var cardapioBebida="   Cardápio de bebidas:  \n";

cardapioBebida=" Código |         Nome      | Preço \n";
cardapioBebida+="   1   | Refrigerante Lata | R$ 5,00 \n";
cardapioBebida+="   2   | Refrigerante 2L   | R$ 10,00 \n";
cardapioBebida+="   3   | Agua              | R$ 3,50 \n";
cardapioBebida+="   4   | Suco              | R$ 7,50 \n";
cardapioBebida+=" Digite o código do pedido: ";

var pedidoBebida=parseInt(prompt(cardapioBebida))
var quantiBebida=parseInt(prompt(" Digite a quantidade de bebidas "));

var valorBebida=0

if(pedidoLanche==1){
    var valorLanche=quantiLanche*20;
    
    console.log("\n Pedido: ");
    console.log(" Valor do lanche: R$20,00");
    console.log(" Quantidade lanche: " +quantiLanche);
    
}else if(pedidoLanche==2){
    var valorLanche=quantiLanche*25;

    console.log("\n Pedido: ");
    console.log(" Valor do lanche: R$25,00");
    console.log(" Quantidade lanche: " +quantiLanche);

}else if(pedidoLanche==3){
    var valorLanche=quantiLanche*23;

    console.log("\n Pedido: ");
    console.log(" Valor do lanche: R$23,00");
    console.log(" Quantidade lanche: " +quantiLanche);

}else if(pedidoLanche==4){
    var valorLanche=quantiLanche*29.99;

    console.log("\n Pedido: ");
    console.log(" Valor do lanche: R$29,99");
    console.log(" Quantidade lanche : " +quantiLanche);

}else if(pedidoLanche==5){
    var valorLanche=quantiLanche*22.50;

    console.log("\n Pedido: ");
    console.log(" Valor do lanche: R$22,50");
    console.log(" Quantidade lanche: " +quantiLanche);

}else{
    console.log(" Digite o código corretamente. ");
}

var subValor=0;

if(pedidoBebida==1){
    var valorBebida=quantiBebida*5;
    var subValor=valorLanche+valorBebida;

    console.log(" Valor da bebida: R$5,00");
    console.log(" Quantidade lanche: " +quantiLanche);
    console.log(" Total: R$" +subValor);

}else if(pedidoBebida==2){
    var valorBebida=quantiBebida*10;
    var subValor=valorLanche+valorBebida;

    console.log(" Valor da bebida: R$10,00" );
    console.log(" Quantidade bebida: " +quantiBebida) 
    console.log(" Total: R$" +subValor);

}else if(pedidoBebida==3){
    var valorBebida=quantiBebida*3.50;
    var subValor=valorLanche+valorBebida;

    console.log(" Valor da bebida: R$3,50" );
    console.log(" Quantidade bebida: " +quantiBebida)
    console.log(" Total: R$" +subValor);

}else if(pedidoBebida==4){
    var valorBebida=quantiBebida*7.50;
    var subValor=valorLanche+valorBebida;

    console.log(" Valor da bebida: R$7.50" );
    console.log(" Quantidade bebida: " +quantiBebida)
    console.log(" Total: R$" +subValor);

}else{
    
    console.log(" Digite o código do pedido corretamente. ");
}

var ValorPedido=valorBebida+valorLanche;

var pagamento=" Formas de pagamento:  \n";

pagamento="Código |    Formas de pagamento      | Desconto \n ";
pagamento+="  1   | Pix                         | 10% de desconto \n ";
pagamento+="  2   | Dinheiro                    | 5% de desconto \n ";
pagamento+="  3   | Débito                      | 3% de desconto \n ";
pagamento+="  4   | Crédito                     | sem desconto \n";
pagamento+="\nEscolha a sua forma de pagamento: ";

var escolhaPagamento=parseInt(prompt(pagamento));

if(escolhaPagamento==1){
    var porcentagem=ValorPedido*0.1;
    var desconto=ValorPedido-porcentagem;

    console.log("\n Pagamento: ");
    console.log(" Forma de pagamento: Pix ");
    console.log(" Desconto: 10%");
    console.log(" Valor total a pagar: R$" +desconto);
  

}else if(escolhaPagamento==2){
    var porcentagem=ValorPedido*0.05;
    var desconto=ValorPedido-porcentagem;

    console.log("\n Pagamento: ");
    console.log(" Forma de pagamento: Dinheiro ");
    console.log(" Desconto: 5%");
    console.log(" Valor total a pagar: R$" +desconto);
  

}else if(escolhaPagamento==3){
    var porcentagem=ValorPedido*0.03;
    var desconto=ValorPedido-porcentagem

    console.log("\n Pagamento: ");
    console.log(" Forma de pagamento: Débito ");
    console.log(" Desconto: 3%");
    console.log(" Valor total a pagar: R$" +desconto);


}else if(escolhaPagamento==4){

    console.log("\n Pagamento: ");
    console.log(" Forma de pagamento: Crédito ");
    console.log(" Desconto: Sem desconto ");
   
}else{
    console.log(" Digite o codigo do pagamento corretamente. ");
}