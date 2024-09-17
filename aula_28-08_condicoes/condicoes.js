var anoAtual=2024;
var anoNascimento=parseInt(prompt("Digite seu ano de nascimento"));
var idade=anoAtual-anoNascimento;

if(idade>=18){
    console.log("Você é maior de idade no Brasil");
    console.log( "Você é obrigado a votar");
}else{
    console.log("Você é menor de idade no Brasil");
}

console.log("usando apenas o  >(idade>17)");
if(idade>17){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

console.log("Invertendo o resultado idade < 18");
if(idade < 18){
    console.log("Menor de Idade!");
}else{
    console.log("Maior de idade!");
}
