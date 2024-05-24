let ipValor = document.querySelector ("#ipValor");
let btReajuste = document.querySelector ("#btReajuste");
let Resultado = document.querySelector ("#Resultado");
function Reajustar(){
    let Total = Number (ipValor.value) * 1.01
    Resultado.textContent = Total;
    }
btReajuste.onclick = function(){
    Reajustar();
}