/*VALIDAÇÃO DE PREENCHIMENTO*/
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
		console.log(window.location.href);
    }
}
/*FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE DADO*/
var dadosLista = [];
function salvarUser() {

    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
    dadosLista.push(nomeUser);
    criaLista();
    //console.log(dadosLista);
    document.getElementById("nomeUser").value = "";
    } else {
        alert("Usuário favor preencher o campo nome");
    }
}
/*FUNÇÃO PARA CRIAR A LISTA*/
function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuario</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}
/*FUNÇÃO PARA EXCLUIR A LISTA*/
function excluir(i) {
    dadosLista.splice((i -1), 1);
    document.getElementById("tabela").deleteRow(i);
    console.log(dadosLista);
}

/*FUNÇÃO PARA EDITAR ITENS DA LISTA*/
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i -1)];
    dadosLista.splice(dadosLista[(i -1)], 1);
    console.log(dadosLista);
}