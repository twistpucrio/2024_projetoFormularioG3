function substituir(entrada,altera){
    let sub=document.querySelector('#alterar').value;
    let regex = new RegExp(altera, 'g');
    let x = entrada.replace(regex, sub);
    alert(x);
    }

    
    function limpar(){
        let texto= document.querySelector('#apagar');
        texto.value=' ';
        let ora= document.querySelector('#entrada');
        ora.value=' ';
        let letra= document.querySelector('#alterar');
        letra.value=' ';
    
    }
  

    window.addEventListener('load', function(){
    let btnReplace;

    btnReplace=document.querySelector('#btnReplace');
    let entrada, alterar;
    
    btnReplace.addEventListener('click', function(){
        entrada= document.querySelector('#apagar');
        alterar=document.querySelector('#entrada');

            substituir(entrada.value, alterar.value);
        
    
    });

    let btnLimpar=document.querySelector("#btnlimpar"); 
    
        btnLimpar.addEventListener('click', function(){
            limpar();
    
     
    });

});




















  
        

