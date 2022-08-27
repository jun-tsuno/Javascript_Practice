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