var listaLanches=[
    {codigo:1, nome:"Hamburguer", valor:10 },
    {codigo:2, nome:"X-salada", valor:15 },
    {codigo:3, nome:"X-bacon", valor:20 },
];

var adicionar="sim"
var i=0;

console.log("Código |    Nome    | Valor ");
for(var i=0; i<listaLanches.length; i++){
    console.log(listaLanches[i].codigo+ " | " +listaLanches[i].nome+ " | R$" +listaLanches[i].valor);

};

console.log("\n");

       var achou=false;
        while(adicionar=="sim"){
            var codigo=parseInt(prompt(" Digite o código do lanche: "));
            var quanti=parseInt(prompt(" Digite a quantidade de lanches: "));
            i++;
        
            adicionar=prompt(" Deseja adicionar mais lanches? ");
      
            for(var i=0; i<listaLanches.length; i++){    
            if(codigo==listaLanches[i].codigo){
            console.log(" Quanti | Código |    Nome    | Valor ");
            console.log((i+1)+"°"+ " "+ quanti+ " | " + " " +listaLanches[i].codigo+ " | " +listaLanches[i].nome+ " | R$" +listaLanches[i].valor+ "\n");  
        achou=true;
    };
  };
};

if(achou==false){
    console.error(" \n PEDIDO INCORRETO \n " );
    
};

var listaBebidas=[
    {codigo:1, nome:"Refrigerante", valor:10 },
    {codigo:2, nome:"Suco", valor:5 },
    {codigo:3, nome:"Àgua", valor:3 },
];

var adicionar="sim"
var i=0;

console.log(" \n Código |    Nome    | Valor ");
for(var i=0; i<listaBebidas.length; i++){
    console.log("  " ,listaBebidas[i].codigo, " | " ,listaBebidas[i].nome, " | R$" ,listaBebidas[i].valor);

};

console.log("\n");

       var achou=false;
        while(adicionar=="sim"){
            var codigo=parseInt(prompt(" Digite o código da bebida: "));
            var quanti=parseInt(prompt(" Digite a quantidade de bebidas: "));
            i++;
        
            adicionar=prompt(" Deseja adicionar mais bebidas? ");
      
            for(var i=0; i<listaBebidas.length; i++){    
            if(codigo==listaBebidas[i].codigo){
            console.log(" Quanti | Código |    Nome    | Valor ");
            console.log((i+1)+"°"+ " "+ quanti+ " | " + " " +listaBebidas[i].codigo+ " | " +listaBebidas[i].nome+ " | R$" +listaBebidas[i].valor+ "\n");  
        achou=true;
    };
  };
};

if(achou==false){
    console.error(" \n PEDIDO INCORRETO \n " );
    
};

while(i<listaLanches.length){
    for(i=0;i<listaLanches.length;i++){
        console.log((i+1)+"°"+ " "+ quanti+ " | " + " " +listaLanches[i].codigo+ "\n"+ " | " +listaLanches[i].nome+ "\n"+ " | R$" +listaLanches[i].valor+ "\n");  
    
    };
};

console.log("\n PEDIDO \n");
console.log("código: " +listaLanches[i].codigo (i+1));
