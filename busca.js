
function limpa() {
    let val1 = document.querySelector("#texto");
    let rdOpcoes = document.getElementsByName("1op");

    for (let n of rdOpcoes) {
        n.checked = false;
    }
        alert(val1.value);
        val1.value=' ';
}

window.addEventListener("load", function(){

    let btnLimpa = document.querySelector("#btnlimpar"); 

    btnLimpa.addEventListener("click", function() {
         limpa();
    });
});







function cortar(entrada){
    alert('172892')///////////////////////////////////////////////////////////
    let result= entrada.split(' ');
    alert(result);
    for(elemento of result){
        alert(elemento); 
        let num=0;
        if(typeoff(elemento)=/\w/){
            num+=1
        }
    }
    if(num!=0){
        alert('Esse texto possui'+num+'caracteres especiais')
    }
    else{
        alert('Esse texto não possui caracteres especiais.')
    }
}

window.addEventListener("load", function(){

    let btnSub = document.querySelector("#btnsub"); 

    btnSub.addEventListener("click", function() {
        alert('99')//////////////////////////////////////////////////////////
         botao();
         alert('09')////////////////////////////////////////////////////
    });
});

function botao(){
    let rb=document.getElementsByName('1op'); 
    alert(rb)
    let txt=document.querySelector('#texto');
    alert('8781')//////////////////////////////////////////////////////////
    for(let cada of rb){
        alert('oi')//////////////////////////////////////////////////////////da pra verificar o id ou value de cada 'cada'????
        if(cada().id=="esp"){
            let palavras=cortar(txt.value)
            alert('7282')/////////////////////////////////////////////////////////
            


        }

    }
    }