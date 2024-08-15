function verificaNome(dados){
    let resultado = dados.search(/[a-z]/ || /[A-Z]/);
    return resultado;
}

function verificaCpf(dados){
    let resultado = dados.search(/\d/);

    if (dados.length != 11 || resultado == -1){
        return -1;
    }
    return 1;
}

window.addEventListener("load", function(){
    let btnCadastro = document.querySelector("#btnCadastroSub");

    btnCadastro.addEventListener("click", function(){
        let nome = document.querySelector("#nome").value;
        let cpf = document.querySelector("#cpf").value;

        let senha = document.querySelector("#senha").value;
        let senhaVer = document.querySelector("#senhaver").value;

        if (nome != "" && cpf != "" && senha != "" && senhaVer != "") {
            let respNome = verificaNome(nome);

            if (respNome == -1){
                alert("Por favor, digite somente letras no campo do nome!");
            }

            let respCpf = verificaCpf(cpf);

            if (respCpf == -1){
                alert("Por favor, digite somente 11 dígitos numéricos!");
            }


        }
        else {
            alert("Por favor, digite algo!!");
        }
    });
});