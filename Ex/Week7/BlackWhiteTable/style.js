function change(){
    for(var i=0;i<element.length;i++){
        element[i].classList.toggle('color--black');
    }
}

const element = document.querySelectorAll('td');
for(var i=0;i<element.length;i++){
    element[i].addEventListener('click', change);
}