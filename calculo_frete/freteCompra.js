var compra=parseFloat(prompt(" Digite o valor da sua compra "));
const frete=50.00

if(compra<300){
    var somaFrete=compra+frete;

    console.log(" Valor do produto:" +" " +"R$" +compra);

    console.log(" valor do frete:" +" " +"R$" +frete);

    console.log(" O valor total da sua compra é:"+ " "+ "R$" +somaFrete);

}else if(compra>=300){
    
    console.log(" Valor do produto:" +" " +"R$" +compra);

    console.log(" valor do frete: R$00,00 ");

    console.log(" O valor total da sua compra é:"+ " "+ "R$" +compra);

}else{
    console.log( "Digite corretamente o valor da compra ");
}
