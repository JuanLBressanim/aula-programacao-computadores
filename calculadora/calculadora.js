var numero1=parseFloat(prompt(" Digite o primeiro número que deseja "));
var operacao=prompt(" Digite a operação da sua conta ( + - * / ) ");
var numero2=parseFloat(prompt(" Digite o segundo número que deseja "));

if(operacao=="+"){
    var soma=numero1+numero2;
    console.log(" O resultado é:" + " " +soma );
}else if(operacao=="-"){
    var subtracao=numero1-numero2;
    console.log(" O resultado é:" + " " +subtracao );
}else if("*"){
    var multiplicacao=numero1*numero2;
    console.log(" O resultado é:" + " " +multiplicacao );
}else if("/"){
    var divisao=numero1/numero2
    console.log(" O resultado é:" + " " +divisao );

}else{
    console.log(" Digite sua conta corretamente ");
}