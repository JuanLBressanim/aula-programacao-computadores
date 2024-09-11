var apresentacao=prompt(" Bem vindo a nossa lanchonte, digite qualquer tecla e verá nosso cardapio ");
var PedidoCardapio=prompt(" Cardapio: \n \n1 Cachorro Quente = R$1,10. \n2 Bauru simples = R$1,30. \n3 Bauru c/ovo = R$1,50. \n4 Hamburguer = R$1,10. \n5 cheeseburguer = R$1,30. \n \nDigite o número do seu pedido ");
var quantidadePedido=parseInt(prompt(" digite a quantidade que deseja "));

if(PedidoCardapio="1"){
    var multiplicacao1= quantidadePedido*1.10;
    console.log("Cachorro Quente de R$"+multiplicacao1+"." );
}else if(PedidoCardapio="2"){
    var multiplicacao2= quantidadePedido*1.30;
    console.log( "Bauru simples de R$"+multiplicacao2+"." );
}else if(PedidoCardapio="3"){
    var multiplicacao3= quantidadePedido*1.50;
    console.log( "Bauru simples de R$"+multiplicacao3+"." ); 
}else if(PedidoCardapio="4"){
    var multiplicacao4= quantidadePedido*1.10;
    console.log( "Bauru simples de R$"+multiplicacao4+"." );
}else if(PedidoCardapio="5"){
    var multiplicacao5= quantidadePedido*1.30;
    console.log( "Bauru simples de R$"+multiplicacao5+"." );    
}else{
    console.log( "Digite o codigo corretamente" );
}


