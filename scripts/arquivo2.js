// Função para obter a extensão do arquivo
function obterExtensaoArquivo(nomeArquivo) {
    return nomeArquivo.split('.').pop().toLowerCase();
}

// Função para verificar se a extensão do arquivo corresponde ao tipo selecionado
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

// Função principal para realizar a verificação
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

    if (!nomeArquivo) {
        alert('Por favor, selecione um arquivo.');
        return;
    }

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

// Adiciona um evento ao botão para realizar a verificação
document.getElementById('btnVerifica').addEventListener('click', verificarArquivo);

// Função para limpar os campos do formulário
function limparFormulario() {
    document.getElementById('arquivo').value = '';
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
}

// Adiciona evento ao botão de limpar
document.getElementById('btnlimpa').addEventListener('click', limparFormulario);