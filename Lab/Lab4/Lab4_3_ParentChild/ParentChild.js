function fillParent(){
    Parent.classList.add('fill1');
}

function fillChild(){
    Child.classList.add('fill2');
}

function clearFill(){
    Parent.classList.remove('fill1');
    Child.classList.remove('fill2');
}

const Parent = document.querySelector('#parent');
Parent.addEventListener('click', fillParent);
const Child = document.querySelector('#child');
Child.addEventListener('click', fillChild);
const Button = document.querySelector('.btn');
Button.addEventListener('click', clearFill);