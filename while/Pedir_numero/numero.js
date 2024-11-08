var numeros=[];
var i=0;

var operacao="+" +"*"

var continuar="Sim"

while(continuar=="Sim"){
    numeros[i]=parseFloat(prompt(" Digite um número: " ));
    i++;

    continuar=prompt(" Deseja adicionar outro número?: ");

}

operacao=prompt(" Digite a operação que deseja (+ ou *): ");


if(operacao=="+"){
    var total=0;
    i=0;

    while(i<numeros.length){
        total+=numeros[i];
        i++;

    }

}else if(operacao=="*"){
    var total=1;
    i=0;

    while(i<numeros.length){
        total*=numeros[i];
        i++;
    }


}else{
    console.log(" Responda conforme foi perguntado: ");

}

while(i<numeros.length){
    console.log(numeros);
    i++;

}

