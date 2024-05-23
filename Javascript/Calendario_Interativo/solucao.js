// Solução simples

/*
function colorirData(){
    let days 		= document.getElementById("day").value;
    let color 		= document.getElementById("color").value;
    let calendar 	= document.getElementById("calendar");
    let td 			= calendar.getElementsByTagName("td")[(parseInt(days)+2)]; 
    td.style.backgroundColor = color;
    console.log(td);
}*/


/* Solução com tratamento de erros
    Verifica se dia selecionado é inteiro positivo entre 1 e 31
    Aplica restrição de marcação de 3 fretes por veículo, no mês.
*/


function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    if (!days) {
        alert('Favor informar um número inteiro positivo');
    } else
        if ((days > 0) && (days <= 31)) {
            let td = calendar.getElementsByTagName('td')[parseInt(days) + 2];
            td.style.backgroundColor = color;
        }
        else {
            alert("Favor informar uma data constante no calendário");
        }

    var elementos = document.querySelectorAll('td');
    var contadorAzul, contadorVerde, contadorRosa, contadorRoxo = 0;

    // Iterar sobre os elementos e verificar seus estilos

    for (i = 0; i < elementos[i]; i++) {
        var estilo = window.getComputedStyle(elementos);
        var corEstilo = estilo.color;
        

        if (corEstilo === "LightBlue") {
            contadorAzul++;
            console.log(contadorAzul);

        } else if (corEstilo === "PaleGreen") {
            contadorVerde++;

        } else if (corEstilo === "LightPink") {
            contadorRosa++;

        } else if (corEstilo === "SlateBlue") {
            contadorRoxo++;

        }
    }


}




// exemplo de solução: https://github.com/AnaLu1za/calendario/blob/main/script.js



/*
    function contarOcorrenciasDeCor(cor) {
    // Obter todos os elementos do projeto
    var todosElementos = document.querySelectorAll('*');
    var contador = 0;

    // Iterar sobre os elementos e verificar seus estilos
    todosElementos.forEach(function(elemento) {
        var estilo = window.getComputedStyle(elemento);
        var corEstilo = estilo.color; // Obtém a cor do estilo do elemento

        // Verifica se a cor do estilo é igual à cor fornecida
        if (corEstilo === cor) {
            contador++;
        }
    });

    // Retornar o número de ocorrências da cor
    return contador;
}

// Exemplo de uso
var corProcurada = 'rgb(255, 0, 0)'; // Substitua pela cor que deseja contar
var numeroDeOcorrencias = contarOcorrenciasDeCor(corProcurada);
console.log('A cor ' + corProcurada + ' foi utilizada ' + numeroDeOcorrencias + ' vezes no projeto.');
*/