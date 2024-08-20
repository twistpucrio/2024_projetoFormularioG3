 
//funcoes:

//limpa:

function limpa() 
{
    texto=document.querySelector("#nomeArq").value;
    texto.value = " ";
}

//verifica:

function validaMaiuscula()
{
  let texto =document.querySelector("#nomeArq").value;
  let regex =/^[A-Z]/;
  return regex.test(texto);//retorna TRUE
}

function validaCaracter()
{
  let texto = document.querySelector("#nomeArq").value;
  const padrao = /[^a-zA-Z0-9_]/;
  return !(padrao.test(texto));
}

function validaTamanho()
{
  let texto = document.querySelector("#nomeArq").value;
  if(texto.length<8 || texto.length>15)
  {
    return false;
  }
  else
    return true;
  
}

function validaTudo()
{
  if(validaCaracter() && validaTamanho()&& validaMaiuscula)
  {
    alert("Nome do arquivo valido");
  }
  else
    alert("nome do arquivo invalido");
}


window.addEventListener("load", function(){
  let btnlimpa = document.querySelector("#btnlimpa");
  let btnverifica = document.querySelector("#btnVerifica");

  btnlimpa.addEventListener("click", function(){
    limpa();
  });

  btnverifica.addEventListener("click", function(){
    validaTudo();
  });
})