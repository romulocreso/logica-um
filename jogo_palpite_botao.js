function sorteia() {

        return Math.round(Math.random() * 10);
    }

    function sorteiaNumeros(quantidade) {

        var palpites = [];

        var numero = 1;

        while(numero <= quantidade) {

            var numeroAleatorio = sorteia();

            if(numeroAleatorio !== 0 ) {

                var achou = false;

                for(var posicao = 0; posicao < palpites.length; posicao++) {

                    if(palpites[posicao] == numeroAleatorio) {
                        achou = true;
                        break;
                    }
                }

                if(achou == false) {
                    palpites.push(numeroAleatorio); 
                    numero++;
                } 
            }
        }

        return palpites;
    }

    var palpites = sorteiaNumeros(5);

    console.log(palpites);

    var input = document.querySelector("input");
    input.focus();  

    function verifica() {

        var achou = false;

        for(var posicao = 0; posicao < palpites.length; posicao++) {

            if(input.value == palpites[posicao]) {

                alert("UAU! Você acertou em cheio.");
                achou = true;
                break;
            }
        }

        if(achou == false) {

            alert("Poxa, você errou. Vamos tentar outra vez?");   
        }
        

        input.value = "";
        input.focus();      
    }

    var button = document.querySelector("button");

    button.onclick = verifica;