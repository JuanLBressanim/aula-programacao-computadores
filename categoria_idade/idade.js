var idade=parseInt(prompt(" Qual a sua idade atual? "));

if(idade<12){
    console.log(" A categoria livre, é a mais adequada para você ");
}else if(idade<14){
    console.log(" A categoria de 12 anos, é a mais adequada para você ");
}else if(idade<16){
    console.log(" A categoria de 14 anos, é a mais adequada para você ");
}else if(idade<18){
    console.log(" A categoria de 16 anos, é a mais adequada para você ");
}else if(idade>=18){
    console.log(" A categoria de 18 anos, é a mais adequada para você ");
}else{
    console.log(" Digite sua idade corretamente ");
}