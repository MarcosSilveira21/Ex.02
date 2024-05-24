let ipNumber1 = document.querySelector("#ipNumber1");
let ipNumber2 = document.querySelector("#ipNumber2");
let ipNumber3 = document.querySelector("#ipNumber3");
let ipNumber4 = document.querySelector("#ipNumber4");
let btAqui = document.querySelector("#btAqui");
let h3Resultad0 = document.querySelector("#h3Resultad0");

function Verificar(){
    let Resultado = Number (ipNumber1);
    let Resultado2 = Number (ipNumber2);
    let Resultado3 = Number (ipNumber3);
    let Resultado4 = Number (ipNumber4);

    if(Resultado < Resultado2 && Resultado < Resultado3 && Resultado < Resultado4){
    alert("Menor");
    }else if(Resultado2 > Resultado && Resultado3 && Resultado < Resultado4){
        alert("Menor");
    }else if(Resultado3 < Resultado && Resultado < Resultado2 && Resultado < Resultado4){
            alert("Menor");
} else{
    alert("Maior");
}
}

btAqui.onclick = Verificar;
