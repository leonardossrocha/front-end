var nome        = document.getElementById('inputNome').value;
var email       = document.getElementById('inputEmail').value;
var celular     = document.getElementById('inputCelular').value;
var cpf         = document.getElementById('inputCpf').value;
var cep         = document.getElementById('inputCep').value;
var endereco    = document.getElementById('inputEndereco').value;
var numeroCasa  = document.getElementById('inputNumero').value;
var bairro      = document.getElementById('inputBairro').value;
var cidade      = document.getElementById('inputCidade').value;
var estado      = document.getElementById('inputEstado').value;

function soNumeros(d){
 return d.replace(/\D/g,"");
//Verificar se campos estão preenchidos
/*function verificar(){

    if (!nome || !email || !celular || !cpf || !cep || !endereco || !numeroCasa || !bairro || !cidade || !estado){
        alert('Preencha os campos corretamente!');
    } else{
        alert('Validação concluida!');
    }
}*/

//Bloco de código para campo CPF
function verificarCPF(cpf) {
    if(cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += ".";
    } else if(cpf.value.length == 11) {
        cpf.value += "-";
    }
    // Remove os pontos/traço da expressão regular, caso exista
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;

    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999")
    return false;

    // Valida 1o digito
    add = 0;

    for (i=0; i < 9; i ++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
        rev = 0;
    }

    if (rev != parseInt(cpf.charAt(9))) {
        return false;
    }

    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i ++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) {
        rev = 0;
    }
    if (rev != parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
}
