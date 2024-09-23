'use strict'; //Modo "Restrito"

//Verificar os dados...
function verificar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var confirmacao = document.getElementById('confirmacao').value;
    var cpf = document.getElementById('cpf').value;
    var nascimento = document.getElementById('nascimento').value;
    var celular = document.getElementById('celular').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var numeroCasa = document.getElementById('numeroCasa').value;
    var complemento = document.getElementById('complemento').value;

    if (!nome || !email || !usuario || !senha || !confirmacao || !cpf || !nascimento || !celular || !cep || !endereco || !bairro || !cidade || !numeroCasa || !complemento){
        alert('[ERRO] Preencha os campos corretamente!');
    } else{
        alert('Validação concluida!');
    }
}

//Mascara de CPF, porém ainda aceitando letras e caracteres...
function mascaraCPF(){
    if(cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += ".";
    } else if(cpf.value.length == 11) {
        cpf.value += "-";
    }
}

//Mascara de Celular, porém ainda aceitando letras e caracteres...
function mascaraCelular(){
    if(celular.value.length == 0){
        celular.value += "(";
    } else if(celular.value.length == 3){
        celular.value += ")";
    } else if(celular.value.length == 4){
        celular.value += " ";
    } else if(celular.value.length == 9){
        celular.value += "-";
    }
}

//Consumindo API de CEP, do ViaCep

//Limpa o Form (do CEP pra baixo)...
const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Preenche os campos relacionados ao CEP...
const preencherForumulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//Verifica se o CEP é válido...
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Consumindo API... 2- passo
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //await = esperar
        const addres = await dados.json(); // fetch = promessa
        if(addres.hasOwnProperty('erro')){ // hasOwnProperty  retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherForumulario(addres);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    } 
}

//Adicionando um evento DOM, no input CEP... 1- passo
document.getElementById('cep').addEventListener('focusout', pesquisarCep);