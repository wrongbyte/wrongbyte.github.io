---

title: "Como funciona a codificação em base64?"
description: "Entendendo o significado de letras e números aparentemente aleatórios"
date: 23-02-2022

---

Quando falamos de texto - ou, mais precisamente, as letras que compõem o alfabeto - estamos falando de caracteres individuais que são representados da mesma forma que números, quando lidos pelo computador. Isto é, tanto letras e números são convertidos para **valores binários**.

Veja a tabela abaixo:
![tabela ascii](https://s2.glbimg.com/fEu3dqWDHAo0Gi1rGJin--DMiT4=/695x0/s.glbimg.com/po/tt2/f/original/2015/02/12/imagem28.jpg)

Cada letra possui um índice na chamada tabela ASCII. Isso significa que podemos representar letras através de números.
Logo, a palavra "Man" seria representada pelos valores 77, 97 e 110. 
Esses valores, por sua vez, convertidos para base binária, correspondem a `01001101` `01100001` `01101110`.
Até aqui, nenhuma informação muito nova. 

Contudo, o que acontece se quisermos codificar dados binários e transmiti-los através de locais que são designados para lidar com dados em texto (caracteres alfanuméricos)? 
A forma escolhida para fazer isso de maneira otimizada é **codificar os dados na base64**.

### O que é base64?
Imagine que você quer inserir uma imagem em uma página web. Temos então um típico caso no qual a conversão para base64 é útil: páginas HTML são otimizadas para texto, e portanto converter as informações binárias para texto se torna interessante.

### Como funciona a codificação?
Para simplificar, vamos utilizar o exemplo anterior.
A palavra "Man" é representada por 3 bytes, `01001101` `01100001` `01101110`. 
Cada byte possui 8 bits, porém para iniciar a codificação para base64, precisamos que cada caractere corresponda a 6 bits. _(Detalhe: 2^6 é igual a 64, o número total de valores possíveis em base64, portanto o nome da codificação)_
Isso é feito juntando os 3 números, obtendo uma string de 24 bits: `010011010110000101101110`.
Dividindo a string de 24 bits em 4 dígitos de 6 bits cada, temos agora:
`010011` `010110` `000101` `101110`, que correspondem, em decimal, a `19`,`22`,`5` e `46`.

O próximo passo é encontrar a correspondência de cada dígito na tabela base64:
![tabela base64](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5i8q51ad7u1zer65zljs.png)

Finalmente, isso nos dá `TWFu` como resultado. A codificação está feita. :tada:


#### A divisão em 24 bits e padding
Sabendo que a conversão para base64 se dá em grupos de 24 bits, ou de 4 dígitos com 6 bits, chegamos a uma questão importante: **o que ocorre caso não tenhamos os 4 dígitos completos?**
Vamos supor que em vez de "Man", tenhamos "Ma". Isso resultaria em dois bytes, ou 16 bits no total.
O próximo múltiplo de 6 é 18, logo, para que possamos ter 3 dígitos de 6 bits, precisamos adicionar 2 bits na string representada.
Isso significa que `0100110101100001` se torna `010011010110000100`, porque adicionamos 2 bits - dois zeros - no final, o que é chamado de _padding_. Assim, podemos então dividir essa string em 3 dígitos de 6 bits e adicionar um quarto bit para completar o quarteto. Esse bit é o padding que, na hora da conversão para ASCII, vai ser representado por `=`. Então Ma corresponde agora a `TWE=`.
Veja, no exemplo abaixo, alguns casos onde o padding é adicionado:
![padding examples](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ayqxq04qgkve5wcq7xzi.png)
 
É importante notar que nem sempre o padding vai ser obrigatório, já que é possível saber se há bits que faltam pelo tamanho da string codificada - já que esse número deve ser sempre múltiplo de 4.