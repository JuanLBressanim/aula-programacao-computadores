var notas=[];
var i=0;

// Recebe as notas

notas[i]=parseInt(prompt( "Digite a nota n°" + (i+1)));
i++;
notas[i]=parseInt(prompt( "Digite a nota n°" + (i+1)));
i++;
notas[i]=parseInt(prompt( "Digite a nota n°" + (i+1)));
i++;
notas[i]=parseInt(prompt( "Digite a nota n°" + (i+1)));

var media=notas[0]+notas[1]+notas[2]+notas[3];
media=media/notas.length;

console.log(" Média é: ", media);

