let ValorKg = document.querySelector("#ValorKg");
let Quantidade = document.querySelector("#Quantidade");
let ValorFinal = document.querySelector("#ValorFinal");
let Precinho = document.querySelector("#Precinho");

function Peso(){
   let Total = Number (ValorKg.value) * Number (Quantidade.value);

    ValorFinal.textContent = Total;
}
Precinho.onclick = function(){

    Peso();

}