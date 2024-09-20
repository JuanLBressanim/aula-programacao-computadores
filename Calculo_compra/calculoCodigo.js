var valorProdu=parseFloat(prompt( "Qual o valor do seu produto?: "));
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
    var contaPorcentagem1=valorQuanti1*0.1;
    var valorTotal1=valorQuanti1-contaPorcentagem1;
    
    console.log(" O desconto é de: " +" " +"10% ");
    
    console.log(" O valor total da sua compra é:" +" " +"R$"+valorTotal);

}else if(escolhaPagamento==2){
    var valorQuanti2=valorProdu*quantidadeProdu;
    var contaPorcentagem2=valorQuanti2*0.05;
    var valorTotal2=valorQuanti1-contaPorcentagem2;

    console.log(" O desconto é de: " +" " +"5% ");
    
    console.log(" A sua compra foi efetuada no total de" +" " +"R%"+valorTotal2 +" ");

}else if(escolhaPagamento==3){
    var valorQuanti3=valorProdu*quantidadeProdu;
    var valorParcela3=valorQuanti3/2;
    
    console.log(" A sua compra foi efetuada em 2x de" +" " +"R$"+valorQuanti3 +", " +"sem juros ");

}else if(escolhaPagamento==4){
    var valorQuanti4=valorProdu*quantidadeProdu;
    var contaPorcentagem4=valorQuanti4*0.1;
    var valorTotal4=valorQuanti4+contaPorcentagem4;
    var valorParcela4=valorTotal4/3;

    console.log(" O juros é de: " +" " +"%10 ");
    
    console.log(" O valor total da sua compra é:" +" " +"R$"+valorParcela4);

}else{
    console.log(" Digite os valores corretamente ");
}

