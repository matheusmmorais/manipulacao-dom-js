const body = document.querySelector('body');
body.parentNode; // mostra os elementos pais do body.
body.parentElement; // mostra os elementos pais do body.

const body = document.querySelector('body');
body.firstChild; // mostra o elemento filho INCLUINDO TEXTO ( ESPAÇO vazio )
body.firstElementChild; // mostra o elemento filho SEM CONTAR O TEXTO ( ESPAÇO vazio)

const body = document.querySelector('body');
body.lastChild; // mostra o elemento filho INCLUINDO TEXTO ( ESPAÇO vazio )
body.lastElementChild; // mostra o elemento filho SEM CONTAR O TEXTO ( ESPAÇO vazio)

const body = document.querySelector('body');
body.childNodes; // mostra o elementos filhos em formato de NODE
body.children; // mostra o elemento filho em formato HTML COLLECTION

const body = document.querySelector('body'); // buscar elementos irmaos
body.nextSibling // considera espaço vazio
body.nextElementSibling // desconsidera espacos vazios e pega os irmaos

const body = document.querySelector('body'); // buscar elementos irmaos
body.previousSibling // considera espaço vazio
body.previousElementSibling // desconsidera espacos vazios e pega os irmaos


const nome = document.firstElementChild('body');
nome.setAttribute("id","class");

const getClass = document.querySelector('.class');
getClass.textContent("testando");