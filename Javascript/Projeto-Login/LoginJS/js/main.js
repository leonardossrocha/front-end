// Função para validação de acesso
function validaAcesso(){

    let email    = document.getElementById("email").value;
    let senha    = document.getElementById("password").value;

    if(!email || !senha){
        alert("Campos de preenchimento obrigatórios");
        //document.getElementById('msgEmail').innerHTML = "Informe um e-mail";
    }else{
        window.location.href="bem-vindo.html";
    console.log(email);
}
}