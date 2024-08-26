
function limpa() {
    let val1 = document.querySelector("#texto");
    let rdOpcoes = document.getElementsByName("1op");

    for (let n of rdOpcoes) {
        n.checked = false;
    }
        val1.value=' ';
}

window.addEventListener("load", function(){

    let btnLimpa = document.querySelector("#btnlimpar"); 

    btnLimpa.addEventListener("click", function() {
         limpa();
    });
});


function cortaresp(palavras){
    let result= palavras.split(' ');
    
    let num=0;
    let caracteresEspeciais = [];
    for(elemento of result){
        let matches = elemento.match(/[^\w\s]/g); 
        if (matches) {
            caracteresEspeciais.push(...matches);
            num += matches.length;
        }
    }
    if (num !== 0) {
        alert('Esse texto possui ' + num + ' caracteres especiais: ' + caracteresEspeciais.join(' ,'));
    } 
    else{
        alert('Esse texto não possui caracteres especiais.');
    }
}          
        

function contarnum(palavras) {
    let result = palavras.split(' ');
    
    
    let num = 0;
    let numeros = [];
    
    for ( elemento of result) {
        
        let matches = elemento.match(/\d/g); 
        
        if (matches) {
            numeros.push(...matches);
            num += matches.length;
        }
    }
    
    if (num !== 0) {
        alert('Esse texto possui ' + num + ' números: ' + numeros.join(' ,'));
    } else {
        alert('Esse texto não possui números.');
    }
}

function contarmai(palavras) {
    let result = palavras.split(' ');
    
    
    let num = 0;
    let maiusculas = [];
    
    for (let elemento of result) {
        
        let matches = elemento.match(/[A-Z]/g); 
        
        if (matches) {
            maiusculas.push(...matches);
            num += matches.length;
        }
    }
    
    if (num !== 0) {
        alert('Esse texto possui ' + num + ' letras maiúsculas: ' + maiusculas.join(' ,'));
    } else {
        alert('Esse texto não possui letras maiúsculas.');
    }
}


function contarmin(palavras) {
    let result = palavras.split(' ');
    
    
    let num = 0;
    let min = [];
    
    for (let elemento of result) {
        
        let matches = elemento.match(/[a-z]/g); 
        
        if (matches) {
            min.push(...matches);
            num += matches.length;
        }
    }
    
    if (num !== 0) {
        alert('Esse texto possui ' + num + ' letras minúsculas: ' + min.join(' ,'));
    } else {
        alert('Esse texto não possui letras maiúsculas.');
    }
}


function botao(){
    let rb = document.getElementsByName('1op'); 
    let txt = document.querySelector('#texto'); 
    let btnSub = document.querySelector("#btnsub"); 

    let textoNaoVazio = txt.value.trim() !== '';
    let opcaoSelecionada = false;

    for (let cada of rb) {
        if (cada.checked) {
            opcaoSelecionada = true;
            break; 
        }
    }

    if (textoNaoVazio && opcaoSelecionada) {
        for (let cada of rb) {
            if (cada.checked) {
                if (cada.value === "esp") {
                    cortaresp(txt.value);
                } else if (cada.value === "min") {
                    contarmin(txt.value);
                } else if (cada.value === "mai") {
                    contarmai(txt.value);
                } else if (cada.value === "num") {
                    contarnum(txt.value);
                }
                break; 
            }
        }
    } else {
        
        alert('Certifique-se de que tenha uma opção selecionada e um texto para ser verificado.');
    }
}



window.addEventListener("load", function(){

    let btnSub = document.querySelector("#btnsub"); 

    btnSub.addEventListener("click", function() {

         botao();
        
    });
});