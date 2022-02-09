function change(){
    if(x==0){
        image.src = 'after.png';
        x=1;
    }
    else{
        image.src = 'before.png';
        x=0;
    }
    //const image = document.querySelector('img');
    //image.src = 'after.png';
}

const image = document.querySelector('img');
image.addEventListener('click', change);
let x = 0;