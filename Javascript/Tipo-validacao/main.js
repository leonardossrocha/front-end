function verificaNome(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    if(!nome){
        document.getElementById('verificaNome').innerHTML = 'Informe o nome';
    }
    else if(!email){
        document.getElementById('verificaEmail').innerHTML = 'Informe o email';
    }
    else{
    	alert("Dados inseridos");
}
}
