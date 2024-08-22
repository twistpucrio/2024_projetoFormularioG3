// Funções:

// Limpa:
function limpa() 
{
  document.getElementById('arquivo').value = '';
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
  //funfa
}

// funcoes para verificar as condições de nomeação:
function validaMaiuscula(nomeArquivo) 
{
  const padrao = /^[A-Z]/;
  return padrao.test(nomeArquivo); 
}

function validaCaracter(nomeArquivo) 
{
  const padrao = /^[a-zA-Z0-9_.]+$/;
  return padrao.test(nomeArquivo); 
}

function validaTamanho(tam) {
  return (tam > 8 && tam < 15); 
}



///////Verificar o tipo do arquivo//////////////
function obterExtensaoArquivo(nomeArquivo) {
  return nomeArquivo.split('.').pop().toLowerCase();
}

function verificarCorrespondenciaTipo(nomeArquivo, tipoSelecionado) {
  const extensao = obterExtensaoArquivo(nomeArquivo);
  const tiposMapeados = {
      'JPG/JPEG/PNG': ['jpg', 'jpeg', 'png'],
      'doc': ['doc'],
      'pdf': ['pdf'],
      'csv': ['csv']
  };

  return tiposMapeados[tipoSelecionado].includes(extensao);
}


function verificarArquivo() {
  const arquivoInput = document.getElementById('arquivo');
  const nomeArquivo = arquivoInput.value.split('\\').pop(); // Pega o nome do arquivo sem o caminho completo

  // Verifica qual checkbox foi selecionado
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let tipoSelecionado = null;

  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          tipoSelecionado = checkbox.name;
      }
  });

  if (!tipoSelecionado) {
      alert('Por favor, selecione um tipo de arquivo.');
      return;
  }

  if (!verificarCorrespondenciaTipo(nomeArquivo, tipoSelecionado)) {
    alert('O tipo selecionado não corresponde ao tipo do arquivo.');
  } 
     
}
//////////////////////////////////////////


window.addEventListener("load", function() {
  let btnlimpa = document.querySelector("#btnlimpa");
  let btnverifica = document.getElementById("submete");
  let nomeArquivo= null;

  btnlimpa.addEventListener("click", function() {
    limpa();
  });

  btnverifica.addEventListener("click", function() 
  {
    let resp ="";
    let arquivo = document.getElementById('arquivo');
    nomeArquivo = arquivo.value.split('\\').pop();
    let tam = nomeArquivo.length;

    if(!nomeArquivo)
    {
      alert("Por favor faça upload do arquivo");
    }
    else {
      if (!validaMaiuscula(nomeArquivo))
        {
          resp+="Nome invalido, deve começar com letra maiuscula\n";
        }
    
        if(!validaCaracter(nomeArquivo))
        {
          resp+="caracteres invalidos\n";
        }
        
        if(!validaTamanho(tam))
        {
          resp +="Tamanho invalido\n";
        }
       
        if(validaMaiuscula(nomeArquivo) && validaCaracter(nomeArquivo) && validaTamanho(tam) )
        {
          resp+="Tudo certo com o nome! :D";
        }

        alert(resp);
        verificarArquivo();
    
    }
    
  });
});
