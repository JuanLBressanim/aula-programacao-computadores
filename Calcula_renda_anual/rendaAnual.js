var rendaAnual=parseFloat(prompt(" Digite o valor da sua renda anual: "));

valorTotal=0

if(rendaAnual<=22.847,76){
    console.log(" Devido a seu valor de renda anual, você esta isento ");

}else if(rendaAnual>22.847,76&rendaAnual<=33.919,80){
    var porcentagem1=rendaAnual*0.075;
    var valorTotal=rendaAnual+porcentagem;

    console.log(" Renda anual: " +rendaAnual);
    console.log(" Taxa de imposto: " +porcentagem1);
    console.log(" Valor total a ser pago: R$" +valorTotal)

}else if(rendaAnual>33.919,80&rendaAnual<=45.012,60){
    var porcentagem2=rendaAnual*0.15;
    var valorTotal=rendaAnual+porcentagem;

    console.log(" Renda anual: " +rendaAnual);
    console.log(" Taxa de imposto: " +porcentagem2);
    console.log(" Valor total a ser pago: R$" +valorTotal)

}else if(rendaAnual>45.012,60){
    var porcentagem3=rendaAnual*0.225;
    var valorTotal=rendaAnual+porcentagem;

    console.log(" Renda anual: " +rendaAnual);
    console.log(" Taxa de imposto: " +porcentagem3);
    console.log(" Valor total a ser pago: R$" +valorTotal)

}else{
    console.log(" Digite os valores corrretamente ");
}

