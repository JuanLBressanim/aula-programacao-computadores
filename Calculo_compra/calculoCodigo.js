var valorProdu=parseFloat(prompt( "Qual o valor do seu produto?:" ));
var quantidadeProdu=parseInt(prompt(" Digite a quantidade comprada: "));

var formaPagamento="   Escolha a forma de pagamento:      \n";

formaPagamento="Código | Formas de pagamento | Desconto/Juros \n ";
formaPagamento+=" 1 | À vista, dinheiro ou cheque | 10% de desconto \n ";
formaPagamento+=" 2 | À vista, dinheiro ou cheque | 5% de desconto \n ";
formaPagamento+=" 3 | Em 2 vezes, cheque          | sem juros \n ";
formaPagamento+=" 4 | Em 3 vezes, cheque          | 10% de juros \n";
formaPagamento+="\nEscolha a sua forma de pagamento: ";

var escolhaPagamento=parseInt(prompt(formaPagamento));

if(escolhaPagamento==1){
    var valorQuanti1=valorProdu*quantidadeProdu;
    var contaPorcentagem1=10/100
    var valorDesconto1=valorProdu*contaPorcentagem1
    var valorTotalProduto=valorProdu-valorDesconto1
    console.log(" Seu desconto é de: " +" " +valorDesconto1 +"% ");
    console.log("O valor total do seu produto é:" +" " +"R%"+valorTotalProduto);

}else if(escolhaPagamento==2){
    var valorQuanti2=valorProdu*quantidadeProdu;
    var contaPorcentagem2=5/100
    var valorTotal2=valorProdu*contaPorcentagem2
    
    console.log(" O valor do seu produto é: " +" " +valorTotal2 );

}else if(escolhaPagamento==3){
    var valorQuanti3=valorProdu*quantidadeProdu;
    var quantiVezes3=valorQuanti3/2
    var valoTotal3=quantiVezes3-valorQuanti3
    
    console.log(" O valor do seu produto é: " +" " +valorQuanti3);

}else{
    console.log(" Digite os valores corretamente");
}

