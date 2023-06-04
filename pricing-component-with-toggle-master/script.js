const a1 = document.getElementById('annually1'); 
const m1 = document.getElementById('monthly1');
const a2 = document.getElementById('annually2'); 
const m2 = document.getElementById('monthly2');
const a3 = document.getElementById('annually3'); 
const m3 = document.getElementById('monthly3');
const checkbox = document.getElementById('checkbox'); 

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        a1.style.display = 'none';
        a2.style.display = 'none';
        a3.style.display = 'none';
        m1.style.display = 'flex';
        m2.style.display = 'flex';
        m3.style.display = 'flex';
    } else {
        a1.style.display = 'flex';
        a2.style.display = 'flex';
        a3.style.display = 'flex';
        m1.style.display = 'none';
        m2.style.display = 'none';
        m3.style.display = 'none';
    }
})