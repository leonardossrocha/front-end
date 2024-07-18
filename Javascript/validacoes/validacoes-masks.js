/* #################################### 
Início verificação de preenchimento de campos do formulário  
*/
function verificar(){
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var fone = document.getElementById('fone').value;
var cpf = document.getElementById('cpf').value;

if (!nome || !email || !fone || !cpf){
    alert("Campos não preenchidos, favor preenchê-los");
} else{
    alert("Campos preenchidos com sucesso")
;}

}
/* 
Fim verificação de preenchimento de campos do formulário  
*/

/* #################################### 
Início Tratamento de campo de telefone  
*/

function tiraHifen(fone){
  const numeroAtual = document.getElementById('fone').value;
    if(numeroAtual != ''){
    const numeroCorrigido = numeroAtual.replace(/\-/g, '');
  } else{
    document.getElementById('fone').value = " ";
  }
  fone.value = numeroCorrigido;
}

function maskFone(){
  var numeroAtual = document.getElementById('fone').value;
  const isCelular = numeroAtual.length === 11;
  const isFone = numeroAtual.length === 10;
  let numeroAjustado;
  if (isCelular){
    const part1 = numeroAtual.slice(0,2);
    const part2 = numeroAtual.slice(2,7);
    const part3 = numeroAtual.slice(7,11);
    numeroAjustado = `(${part1}) ${part2}-${part3}`
  } else if (isFone){
    const part1 = numeroAtual.slice(0,2);
    const part2 = numeroAtual.slice(2,6);
    const part3 = numeroAtual.slice(6,10);
    numeroAjustado = `(${part1}) ${part2}-${part3}`
  } else{
    fone.value = '';
	alert("Numero incorreto, favor verificar!");
  }
  fone.value = numeroAjustado;
}

/* ####################################
Fim Tratamento de campo de telefone  
*/

/* ####################################
Início Tratamento de campo de CPF  
*/

//1ª OPÇÃO DE MÁSCARA PARA CPF E CPNJ
/* */
function maskCPFCNPJ(documento){
  var docAtual = document.getElementById('cpfCnpj').value;

  const CPF = docAtual.length === 11;
  const CNPJ = docAtual.length === 14;
  let docAjustado;

  if (CPF){
    var part1 = docAtual.slice(0,3);
    var part2 = docAtual.slice(3,6);
    var part3 = docAtual.slice(6,9);
    var dv = docAtual.slice(9,11);
    docAjustado = `${part1}.${part2}.${part3}-${dv}`
  } else if (CNPJ){
    var part1 = docAtual.slice(0,2);
    var part2 = docAtual.slice(2,4);
    var part3 = docAtual.slice(4,6);
    var part4 = docAtual.slice(6,10);
    var dv = docAtual.slice(10,12);
    docAjustado = `${part1}.${part2}.${part3}/${part4}-${dv}`
  } else{
    var mensagem = document.getElementById('mensagemDoc');
    mensagem.innerHTML = "Documento inválido";
  }
  documento.value = docAjustado;
}

// 2ª OPÇÃO DE MÁSCARA
//Fonte: https://gist.github.com/fernandovaller/b10a3be0e7b3b46e5895b0f0e75aada5
/*
function cnpj(v){
  v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
  v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
  v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
  v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
  return v
}

function cpf(v){
  v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
  v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
  v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                           //de novo (para o segundo bloco de números)
  v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
  return v
}
*/


//Validação de CPF
// fonte: https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
/*
Para validação do número de CPF é necessário chamar a função no atributo onsubmit que é chamado no elemento form

Ex.:
 <form onsubmit="isValidCPF()">
*/
function isValidCPF() {
  let cpf = document.getElementById('cpfCnpj').value;
  if (typeof cpf !== "string") return false
  cpf = cpf.replace(/[\s.-]*/igm, '')
  if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
  ) {
      alert("Número de CPF inválido"); // cria alerta para CPF Inválido
      return false
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(9, 10)) ) return false
  soma = 0
  for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(10, 11) ) ) return false
  alert("Número de CPF Válido");  // cria alerta para CPF válido
  return true
  
}


/* 
Fim Tratamento de campo de CPF  
*/
