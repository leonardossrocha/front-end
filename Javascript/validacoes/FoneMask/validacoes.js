function verificar(){
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var cpf = document.getElementById('cpf').value;

if (!nome || !email || !cpf){
    alert("Campos não preenchidos, favor preenchê-los");
} else{
    alert("Campos preenchidos com sucesso");
	}

}


// Tratamento de campo de telefone


function tiraHifen(fone){
  const numeroAtual = document.getElementById('fone').value;
  const numeroCorrigido = numeroAtual.replace(/\-/g, '');

  fone.value = numeroCorrigido;
}

function maskFone(fone){
  var numeroAtual = document.getElementById('fone').value;
  const isCelular = numeroAtual.length === 11;
  let numeroAjustado;
  if (isCelular){
    const part1 = numeroAtual.slice(0,2);
    const part2 = numeroAtual.slice(2,7);
    const part3 = numeroAtual.slice(7,11);
    numeroAjustado = `(${part1}) ${part2}-${part3}`
  } else{
    const part1 = numeroAtual.slice(0,2);
    const part2 = numeroAtual.slice(2,6);
    const part3 = numeroAtual.slice(6,10);
    numeroAjustado = `(${part1}) ${part2}-${part3}`
  }
  fone.value = numeroAjustado;
}
