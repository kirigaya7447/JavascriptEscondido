
function verSenha(){
    let textoBtn = document.getElementById("verSenha").innerHTML;
    if(textoBtn === "Mostrar"){
        textoBtn = "Esconder";
        document.getElementById("verSenha").innerHTML = textoBtn;
        document.getElementById("senha").type = "text";
    }
    else{
        textoBtn = "Mostrar";
        document.getElementById("verSenha").innerHTML = textoBtn;
        document.getElementById("senha").type = "password";
    }
}

function verificar() {
    let nome = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;

    if (nome === "warmachine68" && senha === "warmachine68") {
        document.getElementById("errado").innerHTML = "";
        localStorage.user = "Válido";
        window.location.href = "../Pag_adm/index.html";
    }
    else {
        document.getElementById("errado").innerHTML = "Usuário ou senha errados";
    }
}
