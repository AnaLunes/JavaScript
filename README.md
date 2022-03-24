# JavaScript
Repositório voltado ao envio de atividades referentes ao curso de desenvolvimento web.
## Resolução dos exercícios do módulo 14 - JavaScript
A resposta dos exercícios também estarão presentes no documento JavaScript.

1. Resolução das operações:
  * 10 + 15 = ```25 (number)```
  * “10” + 2 = ```“102” (string)```
  * “10” * 2 = ```20 (number)```
  * “10” / 3 = ```3.3333333333333335 (float)```
  * “10” % 3 = ```1 (number)```
  * 10 + true = ```11 (number)```
  * 10 == ”10” = ```true (boolean)```
  * 10 === “10” = ```false (boolean)```
  * 10 < 11 = ```false (boolean)```
  * 10 > 12 = ```false (boolean)```
  * 10 <= 10.1 = ```true (boolean)```
  * 10 > 9.99 = ```true (boolean)```
  * 10 != “dez” = ```true (boolean)```
  * 10 + true = ```11 (number)```
  * “dez” + true = ```“deztrue” (string)```
  * 10 + false = ```10 (number)```
  * 10 * false = ```0 (number)```
  * true + true = ```2 (number)```
  * 10++ = ```11 (number)```
  * 10-- = ```9 (number)```
  * 1 & 1 = ```1 (number)```
  * 1 & 0 = ```0 (number)```
  * 0 & 0 = ```0 (number)```
  * 1 & 0 = ```0 (number)```
  * 0 / 1 = ```0 (number)```
  * 5 + 5 == 10 = ```true (boolean)```
  * “5” + ”5” == 10 = ```false (boolean)```
  * “5” * 2 > 9 = ```true (boolean)```
  * (10 + 10) * 2 = ```40 (number)```
  * 10 + 10 * 2 = ```30 (number)```

2. Resolução das perguntas baseadas nas seguintes variáveis:
  var branco = "preto";
  var preto = “cinza”;
  var cinza = “branco”;
  var carro = “preto”;
  var valor = 30000;
  var prestacao = 750;

a) branco == “branco” = ```falso```
b) branco == cinza = ```falso```
c) carro === branco = ```true```
d) var cavalo = carro == “preto” ? “cinza” : “marron”; = ```cinza```
e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.
  ```
    1.  Junta-se as informações que se tem primeiramente.
    2.  Pega-se o valor total do carro (30.000) e subtrai pelo valor da entrada (3.000), dando o seguinte resultado: 30000 – 3000 = 27000.
    3.	O resultado dessa subtração (27000) é dividida pela prestação (750), dando o seguinte resultado: 27.000 / 750 = 36.
    4.	Temos então a quantidade de prestações (36) necessárias para “quitar” o carro.

    <script>
      function obterParcela(){

        let carro = parseInt(document.getElementById("carro").innerHTML);
        let entrada = parseInt(document.getElementById("entrada").innerHTML);
        let prestacao = parseInt(document.getElementById("prestacao").innerHTML);

        let parcela = (carro - entrada) / prestacao;

        document.getElementById("resultado").innerHTML = "Parcelas: " + parcela;
      }
    </script>
  ```
f) Somando as variáveis de cores é formada uma string de quantos caracteres? 
  ```
    É formada uma string de 27 caracteres, sendo somadas as vírgulas e espaços entre palavras.
    
      a = "preto, cinza, branco, preto"
      a.length
      27
  ```
  ```
    Tirando as vírgulas permanecendo apenas o espaçamento entre as palavras, temos uma string de 24 caracteres.

    a = "preto cinza branco preto"
    a.length
    24
  ```
