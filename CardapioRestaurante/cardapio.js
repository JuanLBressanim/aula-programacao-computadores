var apresentacao="       ESCOLHA UM LANCHE:          \n";
apresentacao=apresentacao+ "Código | Nome            | Preço \n";
apresentacao+="1 | Cachorro Quente | R$1,10.\n";
apresentacao+="2 | Bauru simples   | R$1,30.\n";
apresentacao+="3 | Bauru c/ovo     | R$1,50.\n" ;
apresentacao+="4 | Hamburguer      | R$1,10.\n";
apresentacao+="5 | cheeseburguer   | R$1,30.\n";
apresentacao+="\nDigite o número do seu pedido:";
var PedidoCardapio=parseInt(prompt(apresentacao));
var quantidadePedido=parseInt(prompt(" digite a quantidade que deseja "));
var valorTotal=0

if(PedidoCardapio=1){
    valorTotal=quantidadePedido*1.10
    console.log(" Foram pedidos "+ quantidadePedido + " " +" Cachorro-Quente " +" " +"de" +" " +"R$" +" " +valorTotal );
}else if(PedidoCardapio=2){
    valorTotal=quantidadePedido*1.30
    console.log(" Foram pedidos "+ quantidadePedido + " " +" Bauru Simples "+" " +"de" +" " +"R$" +" " +valorTotal );
}else if(PedidoCardapio=3){
    valorTotal=quantidadePedido*1.50
    console.log(" Foram pedidos "+ quantidadePedido + " " +" Bauru c/ovo "+" " +"de" +" " +"R$" +" " +valorTotal );
}else if(PedidoCardapio=4){
    valorTotal=quantidadePedido*
    console.log(" Foram pedidos "+ quantidadePedido + " " +" Hamburguer " +" " +"de" +" " +"R$" +" " +valorTotal );
}else if(PedidoCardapio=5){
    valorTotal=quantidadePedido*
    console.log(" Foram pedidos "+ quantidadePedido + " " +" Cheeseburguer "+" " +"de" +" " +"R$" +" " +valorTotal );

}else{
    console.log(" Digite o número do pedido corretamente. ");
}
