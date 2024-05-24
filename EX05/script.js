let ipValor1 = document.querySelector ("#ipValor1");
let ipValor2 = document.querySelector ("#ipValor2");
let btVerify = document.querySelector ("#btVerify");
let h3Resulty = document.querySelector ("#h3Resulty");

function VerificarValor(){
    let Resultado = Number (ipValor1.value);
    let Resultado2 = Number (ipValor2.value);

    if(Resultado >=Resultado2){
        alert("Maior");
    } else{
        alert("Menor");
    }
}

btVerify.onclick = function(){
    VerificarValor();
}