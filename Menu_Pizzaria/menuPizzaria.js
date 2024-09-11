var apresentacao=prompt(" Bem-vindo a nossa pizzaria, aperte qualquer tecla e veja nosso menu ");
var menuPizzas=prompt(" MENU:\n \n1 - Mussarela = R$20,00 \n2 - Calabresa = R$25,00 \n3 - Marguerita = R$23,00 \n4 - 4 Queijos = R$29,99 \n5 - Baiana = R$22,50 \n \nDigite o número do seu pedido:");
var menuBebidas=prompt(" MENU:\n \n1 - Refrigerante 2L = R$10,00 \n2 - Refrigerante Lata = R$5,00 \n3 - Água =R$3,50 \n4 - Suco = 7,50 \n \nDigite o número do seu pedido:");
var quantidadePizza=parseInt(prompt(" Digite a quantidade de pizzas que deseja "));
var quantidadeBebida=parseInt(prompt(" Digite a quantidade de bebidas que deseja "));

if(menuPizzas="1"){
    var multiplicacaoPizza1=quantidadePizza*20.00
}else if(menuPizzas="2"){
    var multiplicacaoPizza2=quantidadePizza*25.00
}else if(menuPizzas="3"){
    var multiplicacaoPizza3=quantidadePizza*23.00
}else if(menuPizzas="4"){
    var multiplicacaoPizza4=quantidadePizza*29.99
}else if(menuPizzas="5"){
    var multiplicacaoPizza5=quantidadePizza*22.50
}else{
    console.log(" Digite o codigo do pedido corretamente ");

}

if(menuBebidas="1"){
    var multiplicacaoBebida1=quantidadeBebida*10.00
}else if(menuPizzas="2"){
    var multiplicacaoBebida2=quantidadeBebida*5.00
}else if(menuPizzas="3"){
    var multiplicacaoBebida3=quantidadeBebida*3.50
}else if(menuPizzas="4"){
    var multiplicacaoBebida4=quantidadeBebida*7.50
}else{
    console.log(" Digite o codigo do pedido corretamente ");
}

var Soma=menuPizzas+menuBebidas;
var totalValor=prompt(" O seu pedido deu:"+" "+ "R$"+Soma);