var notas=[];
var i=0;

while(i<4){
    notas[i]=parseInt(prompt(` Digite a °${i+1} nota: `));
    i++;

}
i=0;
var media=0;
while(i<notas.length){
    media+=notas[i];
    i++;

}

media=media/notas.length;

console.log(` A sua média é: ${media}`);

