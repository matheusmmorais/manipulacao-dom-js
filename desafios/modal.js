const button = document.getElementById('openModal');
const modaldiv = document.querySelector('.modal-wrapper');

button.onclick = function(){
    modaldiv.classList.remove('invisible');  
  };

document.addEventListener('keydown', function(event){
    const isEscape = event.key === 'Escape';
    if (isEscape){
        modaldiv.classList.add('invisible');
    }
});