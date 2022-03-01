const element = document.querySelectorAll('.carbox');
for(i=0;i<element.length;i++){
    element[i].addEventListener('click', function(event){
        console.log("Yes");
        this.classList.add('carbox--hidden');
    });
}