var numeros=[];
var i=0;

var continuar="sim";

while(continuar=="sim"){
    numeros[i]=parseFloat(prompt(" Digite um número: "));
    i++;

    continuar=prompt(" Deseja adicionar mais números?: ");
}

var operacao=prompt(" Digite a operação que deseja(+ ou *): ");

if(operacao=="+"){
    var total=0;
    i=0;

    while(i<numeros.length){
        total+=numeros[i]
        i++;

    }

}else if(operacao=="*"){
    var total=1;
    i=0;

    while(i<numeros.length){
        total*=numeros[i]
        i++;

    } 
}

i=0;
var texto= "";

while(i<numeros.length){
    texto=i==numeros.length-1;

if(texto=i==numeros.length-1){;
    console.log(texto +"=");

}else{
    texto+=numeros[i], numeros[i];
    i++;

    console.log(texto+ "+" +"+");
  }

}

console.log(total)
