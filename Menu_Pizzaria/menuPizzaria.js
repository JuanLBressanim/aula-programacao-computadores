var menuPizzas="         CARDÁPIDO:       \N";
var menuPizzas=menuPizzas="Código | Nome | Preço\n";
var menuPizzas=menuPizzas="1 | Mussarela  | R$20,00 \n";
var menuPizzas=menuPizzas="2 | Calabresa  | R$25,00 \n";
var menuPizzas=menuPizzas="3 | Marguerita | R$23,00 \n";
var menuPizzas=menuPizzas="4 | 4 Queijos  | R$29,99 \n";
var menuPizzas=menuPizzas="5 | Baiana     | R$22,50 \n";
var menuPizzas=menuPizzas="\nDigite o número do seu pedido:";

var menuBebidas=prompt(" MENU:\n \n1 - Refrigerante 2L = R$10,00 \n2 - Refrigerante Lata = R$5,00 \n3 - Água =R$3,50 \n4 - Suco = 7,50 \n \nDigite o número do seu pedido:");
var quantidadePizza=parseInt(prompt(" Digite a quantidade de pizzas que deseja "));
var quantidadeBebida=parseInt(prompt(" Digite a quantidade de bebidas que deseja "));

if(menuPizzas=1){
    var multiplicacaoPizza1=quantidadePizza*20.00
    console.log(" pizza sabor nussarela de " +"R$"+multiplicacaoPizza1);
}else if(menuPizzas=2){
    var multiplicacaoPizza2=quantidadePizza*25.00
    console.log(quantidadePizza+ " "+ " pizza sabor calabresa de " +" R$"+multiplicacaoPizza2); 
}else if(menuPizzas=3){
    var multiplicacaoPizza3=quantidadePizza*23.00
    console.log(quantidadePizza+ " "+ " pizza sabor marguerita de "+ "R$"+multiplicacaoPizza3);
}else if(menuPizzas=4){
    var multiplicacaoPizza4=quantidadePizza*29.99
    console.log(quantidadePizza+ " "+ " pizza sabor 4 queijos de "+ "R$"+multiplicacaoPizza4);
}else if(menuPizzas=5){
    var multiplicacaoPizza5=quantidadePizza*22.50
    console.log(quantidadePizza+ " "+ " pizza sabor baiana de"+ "R$"+multiplicacaoPizza5);
}else{
    console.log(" Digite o codigo do pedido corretamente ");

}

if(menuBebidas="1"){
    var multiplicacaoBebida1=quantidadeBebida*10.00
    console.log(quantidadeBebida+ " "+ " refrigerante 2L de "+ "R$"+multiplicacaoBebida1);
}else if(menuBebidas2="2"){
    var multiplicacaoBebida2=quantidadeBebida*5.00
    console.log(quantidadeBebida+ " "+ " refrigerante lata de "+ "R$"+multiplicacaoBebida2);
}else if(menuBebidas3="3"){
    var multiplicacaoBebida3=quantidadeBebida*3.50
    console.log(quantidadeBebida+ " "+ " água de "+ "R$"+multiplicacaoBebida3); 
}else if(menuBebidas4="4"){
    var multiplicacaoBebida4=quantidadeBebida*7.50
    console.log(quantidadeBebida+ " "+ " Suco de "+ "R$"+multiplicacaoBebida1);
}else{
    console.log(" Digite o codigo do pedido corretamente ");
}

console.log("")