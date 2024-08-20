 
//funcoes:

//limpa:

function limpa() {
    texto=document.querySelector("#nomeArq").value;
    texto.value = " ";
}

//verifica:

function valida(){
  let texto =document.querySelector("#nomeArq").value;
  let regex =/^[A-Z]/;
  if(!regex.test(texto))
  {
    alert("O nome do arquivo deve iniciar com letra maiuscula");
  }
  else
    alert("Valido");
}




window.addEventListener("load", function(){
  let btnlimpa = document.querySelector("#btnlimpa");
  let btnverifica = document.querySelector("#btnVerifica");

  btnlimpa.addEventListener("click", function(){
    limpa();
  })

  btnverifica.addEventListener("click", function(){
    valida();
  })
})