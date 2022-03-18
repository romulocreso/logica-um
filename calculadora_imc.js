function pulaLinha() {

		document.write("<br>");	
		document.write("<br>");	
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();
	}

	function calculaImc(altura, peso) {

		return peso / (altura * altura);
	}

	var nome = prompt("Como você se chama?");
	var alturaInformada = prompt(nome + ", qual a sua altura? (em metros)");
	var pesoInformado = prompt(nome + ", qual o seu peso? (em kg)");

	var imc = calculaImc(alturaInformada, pesoInformado);

	mostra(nome + ", seu IMC é de " + imc + ".");

	if (imc <= 18.5) {

		mostra("Atenção, você está abaixo do peso.")
	}

	if(imc <= 18.6 && imc >= 24.9){

		mostra("Parabéns, você está com o peso saudável.");
	}

	if(imc <= 25 && imc >= 29.9) {

		mostra("Você está com sobrepeso.")
	}

	if(imc > 30) {

		mostra("Atenção, você está com indicativo de obesidade. Procure ajuda especializada.");
	}

	mostra("É sobre isso.");