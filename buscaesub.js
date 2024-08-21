function substituir(entrada,altera){
    alert(entrada.replace(altera, '**'));

    }

    window.addEventListener('load', function(){
    let btnReplace;

    btnReplace=document.querySelector('#btnReplace');
    let entrada, alterar;
    
    btnReplace.addEventListener('click', function(){
        entrada= document.querySelector('#entrada');
        alterar=document.querySelector('#alterar');
        substituir(entrada.value, alterar.value);
    
    });
     
    });

    function limpar(){
        let texto= document.querySelector('#apagar');
        alert(texto.value);
        texto.value=' ';
        let ora= document.querySelector('#entrada');
        alert(ora.value);
        ora.value=' ';
        let letra= document.querySelector('#alterar');
        alert(letra.value);
        letra.value=' ';
    
    }
  
    window.addEventListener("load", function(){
        let btnLimpar=document.querySelector("#btnlimpar"); 
        
    
        btnLimpar.addEventListener('click', function(){
            limpar();
    
        });
    })

    