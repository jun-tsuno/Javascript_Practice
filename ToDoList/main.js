const myNodeList = document.getElementsByTagName('LI');

/*-- Using DOM --*/
for(let i = 0; i < myNodeList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
/*-- other solution --------------------------
for(let i = 0; i < myNodeList.length; i++) {
    const span = document.createElement("SPAN");
    span.textContent = '\u00D7';
    span.className = 'close';
    myNodeList[i].appendChild(span);
}
---------------------------------------------*/

const remove = document.getElementsByClassName('close');

for(let i = 0; i < remove.length; i++) {
    remove[i].onclick = function(){
        const div = this.parentNode;
        div.style.display = "none";
    }
}

/*---add new todo (add remove button)--- */

function newElement() {
    const li = document.createElement('LI');
    const myInput = document.getElementById('myInput').value;
    const t = document.createTextNode(myInput);
    li.appendChild(t);
    if(myInput === '') {
        alert('You have to write something!');
    } else {
        document.getElementById('myUL').appendChild(li);
        document.getElementById('myInput').value = '';
    }


    const createSpan = document.createElement('SPAN');
    const txt = document.createTextNode("\u00D7");
    createSpan.className = "close";
    createSpan.appendChild(txt);
    li.appendChild(createSpan);

    const remove = document.getElementsByClassName('close');
    for(let i = 0; i < remove.length; i++) {
    remove[i].onclick = function(){
        const div = this.parentNode;
        div.style.display = "none";
    }
    }
}

/*--- add line when tasks done --- */
const list = document.querySelector('ul');
list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
}, false);


// Add Dark Mode
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

function switchDarkLightMode(isDark) {
    toggleIcon.children[0].innerHTML = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        switchDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        switchDarkLightMode(false);
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);