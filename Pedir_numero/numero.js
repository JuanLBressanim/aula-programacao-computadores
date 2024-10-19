var numeros=[];
var i=0;

var operacao="+" +"*"

var continuar="Sim"

while(continuar=="Sim"){
    numeros[i]=parseFloat(prompt(` Digite o primeiro número: [${i+1}]`));
    i++;

    operacao=prompt(" Digite a operação que deseja (+ ou *): ");

    numeros[i]=parseFloat(prompt(` Digite o primeiro número: [${i+1}]`));
    i++;
    
    continuar=prompt(" Deseja adicionar outro número?: ");

}

var resultado=0;
i=0;

if(operacao=="+"){
    resultado=numeros[i]+numeros[i];
    i++;



}else if(operacao=="*"){
    resultado=numeros[i]*numeros[i];
    i++;


}else{
    console.log(" Responda conforme foi perguntado: ");

}

console.log(`Resultado: ${resultado}`);

