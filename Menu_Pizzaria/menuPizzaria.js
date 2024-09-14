var cardapioPizza="   Cardápio Pizza  \n ";

cardapioPizza=" Código |    Nome    | Preço \n ";
cardapioPizza+=" 1 | Mussarela  | R$20,00 \n ";
cardapioPizza+=" 2 | Calabresa  | R$25,00 \n ";
cardapioPizza+=" 3 | Marguerita | R$23,00 \n ";
cardapioPizza+=" 4 | 4 Queijos  | R$29,99 \n ";
cardapioPizza+=" 5 | Baiana     | R$22,50 \n ";
cardapioPizza+=" \nDigite o número do seu pedido: ";

var pedidoPizza=parseInt(prompt(cardapioPizza));
var quantidadePizza=parseInt(prompt(" Digite a quantidade de pizzas que deseja "));

var valorPizza=0;

if(pedidoPizza==1){
    valorPizza=quantidadePizza*20.00
    console.log(" Foi pedido" +" " +quantidadePizza +" " +"pizza sabor mussarela de" +" " +"R$" +valorPizza);

}else if(pedidoPizza==2){
    valorPizza=quantidadePizza*25.00
    console.log(" Foi pedido" +" " +quantidadePizza +" " +"pizza sabor calabresa de" +" " +"R$" +valorPizza);

}else if(pedidoPizza==3){
    valorPizza=quantidadePizza*23.00
    console.log(" Foi pedido" +" " +quantidadePizza +" " +" pizza sabor marguerita de" +" " +"R$" +valorPizza);

}else if(pedidoPizza==4){
    valorPizza=quantidadePizza*29.99
    console.log(" Foi pedido" +" " +quantidadePizza +" " +"pizza sabor 4 queijos de" +" " +"R$" +valorPizza);

}else if(pedidoPizza==5){
    valorPizza=quantidadePizza*22.50
    console.log(" Foi pedido" +" " +quantidadePizza +" " +" pizza sabor baiana de" +" " +"R$" +valorPizza);

}else{
    console.log("Digite o pedido de pizza corretamente");
}

var cardapioBebida="   Cardápio Bebidas  \n ";

cardapioBebida="Código |        Nome       | Preço \n";
cardapioBebida+=" 1 | Refrigerante 2L   | R$10,00 \n ";
cardapioBebida+=" 2 | Refrigerante Lata | R$5,00 \n ";
cardapioBebida+=" 3 | Água              | R$3,50 \n ";
cardapioBebida+=" 4 | Suco              | R$7,50 \n ";
cardapioBebida+=" \nDigite o número do seu pedido: ";

var pedidoBebida=parseInt(prompt(cardapioBebida));
var quantidadeBebida=parseInt(prompt(" Digite a quantidade de bebidas que deseja "));
var valorTotalBebida=0;

if(pedidoBebidas==1){
    valorTotalBebida=quantidadeBebida*10.00;
    console.log(" Foi pedido " +" " +quantidadeBebida +" " +" Refigeranta 2L de " +" " +"R$" +valorTotalBebida);

}else if(pedidoBebidas==2){
    valorTotalBebida=quantidadeBebida*5.00;
    console.log(" Foi pedido " +" " +quantidadeBebida +" " +" Refigeranta lata de " +" " +"R$" +valorTotalBebida);

}else if(pedidoBebidas==3){
    valorTotalBebida=quantidadeBebida*3.50;
    console.log(" Foi pedida " +" " +quantidadeBebida +" " +" água de " +" " +"R$" +valorTotalBebida);

}else if(pedidoBebidas==4){
    valorTotalBebida=quantidadeBebida*7.50;
    console.log(" Foi pedido " +" " +quantidadeBebida +" " +" suco de " +" " +"R$" +valorTotalBebida);
}
var valorBebida=0

if(pedidoBebida==1){
    valorBebida=quantidadeBebida*10.00;
    console.log(" Foi pedido" +" " +quantidadeBebida +" " +"refrigerante 2L de" +" " +"R$" +valorBebida); 

}else if(pedidoBebida==2){
    valorBebida=quantidadeBebida*5.00;
    console.log(" Foi pedido" +" " +quantidadeBebida +" " +"refrigerante lata de" +" " +"R$" +valorBebida); 

}else if(pedidoBebida==3){
    valorBebida=quantidadeBebida*3.50;
    console.log(" Foi pedido" +" " +quantidadeBebida +" " +"água de" +" " +"R$" +valorBebida); 

}else if(pedidoBebida==4){
    valorBebida=quantidadeBebida*7.50;
    console.log(" Foi pedido" +" " +quantidadeBebida +" " +"suco de" +" " +"R$" +valorBebida); 

}else{
    console.log(" Digite o pedido das bebidas corretamente ");
}

var valorTotal=valorPizza+valorBebida;

console.log("Total a pagar:" +" " +valorTotal);
