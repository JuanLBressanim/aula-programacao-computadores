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
var valorTotal=0

if(escolhaPagamento==1){
    var valorQuanti1=valorProdu*quantidadeProdu;
    var contaPorcentagem1=10/100
    var valorDesconto1=valorProdu*contaPorcentagem1
    var valorTotal=valorProdu-valorDesconto1
    
    console.log(" O desconto é de: " +" " +valorDesconto1 +"% ");
    
    console.log(" O valor total da sua compra é:" +" " +"R$"+valorTotal);

}else if(escolhaPagamento==2){
    var valorQuanti2=valorProdu*quantidadeProdu;
    var contaPorcentagem2=5/100
    var valorDesconto2=valorProdu*contaPorcentagem2
    var valorTotal=valorProdu-valorDesconto2

    console.log(" O desconto é de: " +" " +valorDesconto2 +"% ");
    
    console.log(" A sua compra foi efetuada no total de" +" " +"R%"+valorTotal +" ");

}else if(escolhaPagamento==3){
    var valorQuanti3=valorProdu*quantidadeProdu;
    var quantiVezes3=valorQuanti3/2;
    var valorTotal=valorQuanti3-quantiVezes3;
    
    console.log(" A sua compra foi efetuada em 2x de" +" " +"R$"+valorTotal +", " +"sem juros ");

}else if(escolhaPagamento==4){
    var valorQuanti4=valorProdu*quantidadeProdu;
    var valorJuros=(valorQuanti4/3*10);
    var valorTotal=valorQuanti4+valorJuros;

    console.log(" O juros é de: " +" " +valorJuros +"% ");
    
    console.log(" O valor total da sua compra é:" +" " +"R$"+valorTotal);

}else{
    console.log(" Digite os valores corretamente ");
}

