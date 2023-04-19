// função para validar as credenciais de login
function validarLogin(){
    var usuario= document.getElementById("usuario").value;
    var senha= document.getElementById("senha").value;

    if(usuario == "Usuário" || senha == "Senha"){
        alert("Login válido!");
    } else{
        alert("Usuário ou senha inválido(s)!");
    }
}

