/*VALIDAÇÃO DE PREENCHIMENTO*/
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
        console.log(window.location.href);
    }
}
/*FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE DADO*/
var dadosLista = [];
// Forma 1
// ----------------------------------------------------------------
/*var emails = [];

function salvarUser() {

    let nomeUser = document.getElementById("nomeUser").value;
    let email = document.getElementById('email').value;

    if (nomeUser && email) {
        dadosLista.push(nomeUser);
        emails.push(email);
        criaLista();
        //console.log(dadosLista);
        document.getElementById("nomeUser").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Usuário favor preencher o campo nome e/ou email");
    }
}*/
// ----------------------------------------------------------------

// Forma 2
// ----------------------------------------------------------------


function salvarUser() {
    // Variáveis da função
    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById('emailUser').value;

    // Validação de e-mail
    if (document.getElementById("emailUser").value == "" || document.getElementById("emailUser").value.indexOf('@') == -1 || document.getElementById("emailUser").value.indexOf('.') == -1) {
        alert("Por favor, informe um e-mail válido");
        return false;
    } else if (nomeUser && emailUser) {
        dadosLista.push({ nome: nomeUser, email: emailUser });
        criaLista();
        //console.log(dadosLista);
        document.getElementById("nomeUser").value = "";
        document.getElementById("emailUser").value = "";
    } else {
        alert("Usuário favor preencher o campo nome e/ou email");
    }
}
// ----------------------------------------------------------------


/*FUNÇÃO PARA CRIAR A LISTA*/
function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuario</th><th>Email</th><th>Ações</th></tr>";
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i].nome + "</td><td>" + dadosLista[i].email + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}
/*FUNÇÃO PARA EXCLUIR A LISTA*/
function excluir(i) {
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
    console.log(dadosLista); // Linha para verificação de funcionamento pelo console
}

/*FUNÇÃO PARA EDITAR ITENS DA LISTA*/
// FORMA 1
// ------------------------------------------------------------------------------
/*function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    document.getElementById("emailUser").value = emails[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    emails.splice(emails[(i - 1)], 1);
    console.log(dadosLista);
    console.log(emails);
}*/
// ------------------------------------------------------------------------------

// FORMA 2
// ------------------------------------------------------------------------------
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i - 1)].nome;
    document.getElementById("emailUser").value = dadosLista[(i - 1)].email;
    dadosLista.splice(dadosLista[(i - 1)], 1).nome;
    dadosLista.splice(dadosLista[(i - 1)], 1).email;
    console.log(dadosLista);// Linha para verificação de funcionamento pelo console
    // ------------------------------------------------------------------------------
}