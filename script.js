let num = 0;
function insert(num){
    document.getElementById('resultado').innerHTML += num;
    document.getElementById('preresultado').innerHTML +=  num;
}
function limpar(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('preresultado').innerHTML = "";
}

function apagar(){
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}