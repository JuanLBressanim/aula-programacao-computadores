var numero1=parseFloat(prompt(" Digite a primeira nota: "));
var numero2=parseFloat(prompt(" Digite a segunda nota: "));
var numero3=parseFloat(prompt(" Digite a terceira nota: "));
var numero4=parseFloat(prompt(" Digite a quarta nota: "));

var media=(numero1+numero2+numero3+numero4)/4

if(media<=5){
    console.log(" Reprovado. ");

}else if(media>=7){
    console.log(" Aprovado. ");

}else if(media<5<7){
    console.log(" Em recuperação. ");

}
