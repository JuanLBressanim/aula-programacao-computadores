var menuPizzas="  CARDÁPIDO PIZZAS:       \n";

var menuPizzas=menuPizzas+"Código | Nome | Preço \n";

var menuPizzas=menuPizzas+="1 | Mussarela  | R$20,00 \n";
var menuPizzas=menuPizzas+="2 | Calabresa  | R$25,00 \n";
var menuPizzas=menuPizzas+="3 | Marguerita | R$23,00 \n";
var menuPizzas=menuPizzas+="4 | 4 Queijos  | R$29,99 \n";
var menuPizzas=menuPizzas+="5 | Baiana     | R$22,50 \n";

var menuPizzas=menuPizzas+="\nDigite o número do seu pedido:";

var pedidoPIzza=parseInt(prompt(menuPizzas));
var quantidadePizza=parseInt(prompt(" Digite a quantidade de pizzas que deseja "));
var valorTotalPizza=0;

if(pedidoPIzza==1){
    valorTotalPizza=quantidadePizza*20.00;
    console.log(" Foi pedida" +" " +quantidadePizza +" " +"pizza sabor mussarela de "+ " " +"R$" +valorTotalPizza );

}else if(pedidoPIzza==2){
    valorTotalPizza=quantidadePizza*25.00;
    console.log(" Foi pedida" +" " +quantidadePizza +" " +"pizza sabor calabresa de " +" " +"R$" +valorTotalPizza );

}else if(pedidoPIzza==3){
    valorTotalPizza=quantidadePizza*23.00;
    console.log(" Foi pedida" +" " +quantidadePizza +" " +"pizza sabor marguerita de " +" " +"R$" +valorTotalPizza );

}else if(pedidoPIzza==4){
    valorTotalPizza=quantidadePizza*29.99;
    console.log(" Foi pedida" +" " +quantidadePizza +" " +"pizza sabor 4 queijos de " +" " +"R$" +valorTotalPizza );

}else if(pedidoPIzza==5){
    valorTotalPizza=quantidadePizza*22.50;
    console.log(" Foi pedida" +" " +quantidadePizza +" " +"pizza sabor baiana de " +" " +"R$" +valorTotalPizza );

}else{
    console.log(" Digite o codigo de pizzas corretamente");
}


var menuBebidas="         CARDÁPIO BEBIDAS:      \n";

var menuBebidas=menuBebidas+"Código | Nome              | Preço \n";

var menuBebidas=menuBebidas+="1 | Refrigerante 2L   | R$10,00 \n";
var menuBebidas=menuBebidas+="2 | Refrigerante Lata | R$5,00 \n"
var menuBebidas=menuBebidas+="3 | Água              | R$3,50 \n"
var menuBebidas=menuBebidas+="4 | Suco              | 7,50 \n"

var menuBebidas=menuBebidas+="\nDigite o número do seu pedido:"

var pedidoBebidas=parseInt(prompt(menuBebidas));
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

}else{
    console.log(" Digite o codigo de bebidas corretamente");
}

var valorTotalPedido=valorTotalPizza+valorTotalBebida;

console.log(" Total a pagar:" +" " +"R$" +valorTotalPedido);