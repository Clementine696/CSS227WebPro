function swap(){
    if(x==1){
        Sen1.classList.add('hidden');
        Sen2.classList.remove('hidden');
        Sen3.classList.remove('hidden');
        x=0;
    }
    else{
        Sen1.classList.remove('hidden');
        Sen2.classList.add('hidden');
        Sen3.classList.add('hidden');
        x=1;
    }
    
}

const Toggle = document.querySelector('section');
const Sen1 = document.querySelector('#sen1');
const Sen2 = document.querySelector('#sen2');
const Sen3 = document.querySelector('#sen3');
Toggle.addEventListener('click', swap);
let x=1;