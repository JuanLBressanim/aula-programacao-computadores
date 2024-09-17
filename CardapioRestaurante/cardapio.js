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

var valorTotal=0

if(cardapioPedido==1){
    valorTotal=quantidadePedido*1.10
    console.log(" Foram pedidos " +quantidadePedido +" " +" Cachorro-Quente de " +" " +"R$" +" " +valorTotal );
}else if(cardapioPedido==2){
    valorTotal=quantidadePedido*1.30
    console.log(" Foram pedidos " +quantidadePedido +" " +" Bauru Simples de " +" " +"R$" +" " +valorTotal );
}else if(cardapioPedido==3){
    valorTotal=quantidadePedido*1.50
    console.log(" Foram pedidos " +quantidadePedido +" " +" Bauru c/ovo de " +" " +"R$" +" " +valorTotal );
}else if(cardapioPedido==4){
    valorTotal=quantidadePedido*1.10
    console.log(" Foram pedidos " +quantidadePedido +" " +" Hamburguer de " +" " +"R$" +" " +valorTotal );
}else if(cardapioPedido==5){
    valorTotal=quantidadePedido*1.30
    console.log(" Foram pedidos " +quantidadePedido +" " +" Cheeseburguer de " +" " +"R$" +" " +valorTotal );

}else{
    console.log(" Digite o código do pedido corretamente ");
}
