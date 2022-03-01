// criando e adicionando elementos

// create element
const div = document.createElement('div');
div.innerText = "Ola dev";

// inserts antes e depois
const body = document.querySelector('body');
body.append(div); // adicionar depois
body.prepend(div); // adicionar antes

// inserir depois
const body = document.querySelector('body'); 
const header = body.querySelector('header');
body.insertBefore(div, header.nextElementSibling);