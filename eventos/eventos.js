const input = document.querySelector('input'); // evento de teclado
input.onkeyup = function (){
    console.log("rodei");
}

const input = document.querySelector('input'); // evento de click
input.onclick = function (){
    console.log("rodei");
}

const input = documet.querySelector('input'); // adicionando eventos event
input.onkeydown = function(event){
    console.log(event);
}