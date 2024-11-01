var numeroTabuada=[];
var i=0;

var multiplicacao=[1,2,3,4,5,6,7,8,9,10];
var i=0;

var numeroTabuada=parseInt(prompt(" Digite um número para ver sua tabuada: "));

var total=1;
i=0;

while(i<multiplicacao.length){
    if(i==multiplicacao.length)
    total*=numeroTabuada[i], multiplicacao[i];
    i++;
}

var  texto=""; 

while(i<multiplicacao.length){
    if(i==multiplicacao.length)
    texto+=numeroTabuada[i] +"x" +multiplicacao[i]; 
    
}

console.log(texto, "=", total);