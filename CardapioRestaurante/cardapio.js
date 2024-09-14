var cardapio="     Cardápio:    \n ";

cardapio=" Código |      Nome       | Preço \n ";
cardapio+=" 1 | Cachorro quente | R$1,10. \n ";
cardapio+=" 2 | Bauru simples   | R$1,30. \n ";
cardapio+=" 3 | Bauru c/ovo     | R$1,50. \n ";
cardapio+=" 4 | Hamburguer      | R$1,10. \n ";
cardapio+=" 5 | cheeseburguer   | R$1,30. \n ";
cardapio+=" \n Digite o número do seu pedido:";

var cardapioPedido=parseInt(prompt(cardapio));
var quantidadePedido=parseInt(prompt(" digite a quantidade que deseja "));

var valorPedido=0

if(cardapioPedido==1){
    valorPedido=quantidadePedido*1.10;
    console.log(" Seu pedido é" +" " +quantidadePedido +" " +"cachorro quente de" +" " +"R$" +valorPedido);

}else if(cardapioPedido==2){
    valorPedido=quantidadePedido*1.30;
    console.log(" Seu pedido é" +" " +quantidadePedido +" " +"bauru simples de" +" " +"R$" +valorPedido);

}else if(cardapioPedido==3){
    valorPedido=quantidadePedido*1.50;
    console.log(" Seu pedido é" +" " +quantidadePedido +" " +"bauru c/ovo de" +" " +"R$" +valorPedido);

}else if(cardapioPedido==4){
    valorPedido=quantidadePedido*1.10;
    console.log(" Seu pedido é" +" " +quantidadePedido +" " +"hamburguer de" +" " +"R$" +valorPedido);

}else if(cardapioPedido==5){
    valorPedido=quantidadePedido*1.30
    console.log(" Seu pedido é" +" " +quantidadePedido +" " +"cheeseburguer de" +" " +"R$" +valorPedido);

}else{
    console.log(" Digite o código do pedido corretamente ");
}


