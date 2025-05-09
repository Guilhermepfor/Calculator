function insertToDisplay(data){

    document.querySelector('#display').value += data;

}

function clean(){

    document.querySelector('#display').value = '';

}

function backspace(){

    const display = document.querySelector('#display');
    display.value = display.value.slice(0, -1);

}

function result (){

    const display = document.querySelector('#display');
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'ERROR';
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', (e) => {
        toggleButton.classList.toggle('active');
        // Permite o redirecionamento depois da troca de classe
    });
});
