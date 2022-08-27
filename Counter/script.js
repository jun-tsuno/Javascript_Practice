let number = document.getElementById('number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const button = document.querySelectorAll('button');

let count = 0;

// Calculate function
function calculate(e) {
    let style = e.currentTarget.classList;
    if(style.value === 'increase') {
        count++;
    } else if(style.value === 'decrease') {
        count--;
    } else {
        count = 0;
    }

    number.innerText = count;

    if(count > 0) {
        number.style.color = "green";
    } else if(count < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
}

// Add eventListener when button clicked.
button.forEach((item) => {
    item.addEventListener('click', calculate)
});
