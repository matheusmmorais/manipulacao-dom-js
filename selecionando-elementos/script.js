
// pegar elemento por id
console.log(document.getElementById("paragrafo")); //element

// pegar elemento por classe
console.log(document.getElementsByClassName("divclass")); //html collection

// pegar elemento por tag
console.log(document.getElementsByTagName("body")); // htmll collection

// pegar elemento pelo seletor, ele pega o primeiro
console.log(document.querySelector(".class")) // element

// pegar todos os elementos de uma vez, melhor usado quando precisa fazer ForEach, pois o HTML Collection não funcionam forEach, apenas o node list.
console.log(document.querySelectorAll(".class")) // nodelist

const text = document.getElementById("paragrafo"); // usando textContent para concatenar ou substituir o texto.
text += "Olá devs"; 

const text = document.querySelector("paragrafo"); // usando innerText para trocar texto.
text.innerText = "Olá devs";

const text = document.querySelector("paragrafo"); // usando innerHTML para adicionar html.
text.innerHTML = "Olá devs <strong>!!!</strong>";

const text = document.querySelector("input"); // usando value para VER e ADICIONAR valor.

console.log(text.value);
text.value = "teste";

const texto2 = document.querySelector(".class"); // setando um atributo com setAttribute;
texto2.setAttribute('id', 'header');

texto2.removeAttribute('id');

const trocarFundo = document.querySelector('body'); // definir estilos usando a tag style;
trocarFundo.style.backgroundColor = "#f9f3d2"; 

const trocarFundo2 = document.querySelector('body');
trocarFundo2.classList.add("class"); // adiciona uma classe no body
trocarFundo2.classList.remove("class"); // remove a classe do body
trocarFundo2.classList.toggle("class"); // serve como um interruptor, se tiver > remove,  se não tiver > coloca a classe.