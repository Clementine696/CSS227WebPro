const element = document.querySelector('.button');
element.addEventListener('click', function(event){
        count++;
        element1.innerHTML = (count);
    });

const element1 = document.querySelector('#count');
var count = 0;