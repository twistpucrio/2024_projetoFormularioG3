function verificaNome(dados){
    let resultado = dados.search(/\d/);
    return resultado;
}

function verificaCpf(dados){
    //let resultado = dados.search(/\D/);
    const padrao = /(\d\d\d+\.+\d\d\d+\.+\d\d\d+\-+\d\d)/;
    let resultado = padrao.test(dados);
    
    return resultado;
}

function verificaDataNasc(dataNasc){
    //
    padrao= /[0-9]/;
    let dataVetor = dataNasc.split('-');
    let ano = dataVetor[0];
    let tamAno = ano.length;
    return (tamAno==4);
    
}

function verificaUsuario(user){
    const padrao= /^[a-z][a-z0-9._]*$/;
    return padrao.test(user);
}

function verificaEmail(email){
    const padrao = /^[a-z._]+@[a-z._]+$/;
    return padrao.test(email);

}

function verificaSenha(dados){
    const padrao1 = /(?=.*[-\#\$\.\%\&\*])(?=.*[A-Z])(?=.*\d).{8,15}/;
    const padrao2 = /0+/;
    
    if (padrao1.test(dados) && !padrao2.test(dados)){
        return 1;
    }
    else{
        return -1;
    }

}

function verificaSenhaVer(senha, senhaVer){
    if (senhaVer==senha){
        return 1;
    }
    else{
        return -1;
    }
}

function limparCadastro(){
    let nome = document.querySelector("#nome");
    let cpf = document.querySelector("#cpf");
    let dataNasc = document.querySelector("#datanasc");
    let user = document.querySelector("#user");
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");
    let senhaVer = document.querySelector("#senhaver");

    nome.value = "";
    cpf.value = "";
    dataNasc.value = "";
    user.value = "";
    email.value = "";
    senha.value = "";
    senhaVer.value = "";
}

window.addEventListener("load", function(){
    let btnCadastro = document.querySelector("#btnCadastroSub");
    let btnLimpa = document.querySelector("#btnLimpar");

    btnCadastro.addEventListener("click", function(){
        let resposta = "";
        let nome = document.querySelector("#nome").value;
        let cpf = document.querySelector("#cpf").value;
        let dataNasc = document.querySelector("#datanasc").value;
        let user = document.querySelector("#user").value;
        let email = document.querySelector("#email").value;
        let senha = document.querySelector("#senha").value;
        let senhaVer = document.querySelector("#senhaver").value;

        if (nome != "" && cpf != "" && dataNasc != "" && user != "" && email != "" && senha != "" && senhaVer != "") {
            if (verificaNome(nome) != -1){
                resposta += "Nome inválido\n";
            }
    
            if (!verificaCpf(cpf)){
                resposta += "CPF inválido\n";
            }

            if(!verificaDataNasc(dataNasc)){
                resposta +="Data de nascimento inválida\n";
            }

            if(!verificaUsuario(user)){
                resposta += "Usuário inválido\n";
            }
    
            if(!verificaEmail(email)){
                resposta += "Email inválido\n"
            }
    
            if (verificaSenha(senha) == -1){
                resposta += "A senha precisa ter um mínimo de 8 e um máximo de 15 caracteres, devendo haver pelo menor uma letra maiúscula, um número e um caractere especial\n";
            }else{
                if (verificaSenhaVer(senhaVer, senha) == -1){
                    resposta += "A senha de verificação tem que ser igual à outra\n";
                }
            }

        }
        else {
            resposta += "Por favor, digite tudo!";
        }
        
        alert(resposta);
    });

    btnLimpa.addEventListener("click", limparCadastro);
});