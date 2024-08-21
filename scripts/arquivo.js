// Funções:

// Limpa:
function limpa() 
{
  document.getElementById('arquivo').value = '';
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
  //funfa
}

// Verifica:
function validaMaiuscula(nomeArquivo) 
{
  const padrao = /^[A-Z]/;
  return padrao.test(nomeArquivo); 
}

function validaCaracter(nomeArquivo) 
{
  const padrao = /[^a-zA-Z0-9_]/;
  return !(padrao.test(nomeArquivo)); 
}

function validaTamanho(tam) {
  return !(tam < 8 || tam > 15); 
}

function validaNomeArquivo(nomeArquivo, tam) {

  if (validaCaracter(nomeArquivo) && validaTamanho(tam) && validaMaiuscula(nomeArquivo))
  {
    alert("Nome do arquivo válido");
  } 
  else 
  {
    alert("Nome do arquivo inválido");
  }

}


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

  if (verificarCorrespondenciaTipo(nomeArquivo, tipoSelecionado)) {
      alert('Tudo certo! O tipo selecionado corresponde ao tipo do arquivo.');
  } else {
      alert('O tipo selecionado não corresponde ao tipo do arquivo.');
  }
}



window.addEventListener("load", function() {
  let btnlimpa = document.querySelector("#btnlimpa");
  let btnverifica = document.getElementById("submete");
  

  btnlimpa.addEventListener("click", function() {
    limpa();
  });

  btnverifica.addEventListener("click", function() 
  {
    let arquivo = document.getElementById('arquivo');
    let nomeArquivo = arquivo.value.split('\\').pop();
    let tam = nomeArquivo.length;

    if (nomeArquivo) 
    {
      validaNomeArquivo(nomeArquivo, tam);
      alert(nomeArquivo);
    }
     else 
    {
      alert("Por favor, selecione um arquivo.");
    }

    verificarArquivo();


  });
});