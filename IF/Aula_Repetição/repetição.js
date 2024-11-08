/* EScreva um programa que solicite o valor do produto
 Em seguida pergunte se deseja adicionar mais produto
 Se sim ou S ou 1 (escolha 1 deles), solicite novamente o produto
 Quando a resposta nao, apresente a soma dos valores dos produtos.
 */

 var produtos=[];
 var i=0;

 var maisProdutos

 while(maisProdutos=="Sim"){
    produtos[i]=parseFloat(prompt(` Digite o valor do produto [${i+1}]` ));
    i++;

    maisProdutos=prompt(" Você deseja adiconar mais produtos? ");

}

while(maisProdutos=="S"){
    produtos[i]=parseFloat(prompt(` Digite o valor do produto [${i+1}]` ));
    i++;

    maisProdutos=prompt(" Você deseja adiconar mais produtos? ");

}

var total=0;
i=0;

total+=produtos[i];
i++;
