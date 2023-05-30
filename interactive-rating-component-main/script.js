const buttons = document.querySelectorAll('#btn');
const submit = document.getElementById('submit');
const first = document.getElementById('first');
const second = document.getElementById('second');
const number = document.getElementById('number'); 

submit.addEventListener('click', () => {
    first.style.display = 'none';
    second.style.display = 'flex';
});

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        number.textContent = btn.innerHTML;
    });
});