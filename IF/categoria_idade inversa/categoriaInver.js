var idade=parseInt(prompt(" Qual a sua idade atual? "));

if(idade<=18){
    console.log(" A categoria 16 anos, é a mais adequada para você ");

}else if(idade<16){
    console.log(" A categoria de 14 anos, é a mais adequada para você ");

}else if(idade<14){
    console.log(" A categoria de 12 anos, é a mais adequada para você ");

}else if(idade<12){
    console.log(" A categoria de livre, é a mais adequada para você ");

}else if(idade<1){
    console.log(" infelizmente você não nasceu ainda, espere mais um pouco ");

}else{
    console.log(" Digite sua idade corretamente ");
}