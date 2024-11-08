var numero=parseInt(prompt(" Digite um número: "));

var i=0;

if(numero>0){

while (i < 11){
   console.log(numero, " x ", i,  " = ", i * numero);
   i++;
}

}else{
   console.log(" Digite um número valido. ");
}