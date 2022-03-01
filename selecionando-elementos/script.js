
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

