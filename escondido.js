
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

function verificar(){
}
