var valorProdu=parseFloat(prompt( "Qual o valor do seu produto?:" ));
var quantidadeProdu=parseInt(prompt(" Digite a quantidade escolhida: "));

var formaPagamen=" Forma de pagamento \n ";

formaPagamen=" Código |           Forma             | Desconto/Juros ";
formaPagamen+=" 1 | À vista, dinheiro ou cheque | 10% de desconto \n ";
formaPagamen+=" 2 | À vista, dinheiro ou cheque | 5% de desconto \n ";
formaPagamen+=" 3 | Em 2 vezes                  | sem juros \n ";
formaPagamen+=" 4 | Em 3 vezes                  | 10% de juros \n ";
formaPagamen+=" \nEscolha a sua forma de pagamento:";

var escolhaPagamento=parseFloat(prompt(formaPagamen));

if(escolhaPagamento==1){
    var valorQuanti1=valorProdu*quantidadeProdu;
    var contaPorcentagem1=10/100
    var valorTotal1=valorProdu*contaPorcentagem1
    console.log(" O valor do seu produto é: " +" " +valorTotal1 );

}else if(escolhaPagamento==2){
    var valorQuanti2=valorProdu*quantidadeProdu;
    var contaPorcentagem2=5/100
    var valorTotal2=valorProdu*contaPorcentagem1
    console.log(" O valor do seu produto é: " +" " +valorTotal2 );

}else if(escolhaPagamento==3){
    var valorQuanti3=valorProdu*quantidadeProdu;
    var quantiVezes3=valorQuanti3/2
    var valoTotal3=quantiVezes3-valorQuanti3
    console.log(" O valor do seu produto é: " +" " +valorQuanti3);

}else{
    console.log(" Digite os valores corretamente");
}

