var valorProdu=parseFloat(prompt( "Qual o valor do seu produto?:" ));
var quantidadeProdu=parseInt(prompt(" Digite a quantidade escolhida: "));
var formaPagamen=prompt(" Escolha a forma de pagamento:\n \n1 - À vista, dinheiro ou cheque, 10% de desconto \n2 - À vista, dinheiro ou cheque, 5% de desconto \n3 - Em 2 vezes, sem juros \n4 - Em 3 vezes, 10% de juros \n \nEscolha a sua forma de pagamento." );

if(formaPagamen="1"){
    var valorQuanti1=valorProdu*quantidadeProdu;
    var contaPorcentagem1=10/100
    var valorTotal1=valorProdu*contaPorcentagem1
    console.log(" O valor do seu produto é: " +" " +valorTotal1 );
}else if(formaPagamen="2"){
    var valorQuanti2=valorProdu*quantidadeProdu;
    var contaPorcentagem2=5/100
    var valorTotal2=valorProdu*contaPorcentagem1
    console.log(" O valor do seu produto é: " +" " +valorTotal2 );
}else if(formaPagamen="3"){
    var valorQuanti3=valorProdu*quantidadeProdu;
    var quantiVezes3=valorQuanti3/2
    var valoTotal3=quantiVezes3-valorQuanti3
    console.log(" O valor do seu produto é: " +" " +valorQuanti3);
}

