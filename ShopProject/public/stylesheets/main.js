var number = 1, /// number value
    min = 1, /// min number
    max = 5; /// max number

function qtyminus(){
    if (number>min){
        number = number-1; /// Minus 1 of the number
        qty.innerHTML = number ; /// Display the value in place of the number
        QTY.value  = number ;
    }
    if(number == min) {        
        qty.style.color= "red";
        setTimeout(function(){qty.style.color= "black"},500)
    }
    else {
        qty.style.color="black";            
    }
}

function qtyplus(){
    if(number<max){
        number = number+1;
        qty.innerHTML = number ; /// Display the value in place of the number
        QTY.value = number ;

    }     
    if(number == max){
        qty.style.color= "red";
        setTimeout(function(){qty.style.color= "black"},500)
    } else {
        qty.style.color= "black";
    }
}

function alerttt(){
    alert("you choice : " + number);
}
const minus = document.querySelector('#input-minus');
minus.addEventListener('click', qtyminus);

const plus = document.querySelector('#input-plus');
plus.addEventListener('click', qtyplus);

const qty = document.querySelector('#input-count');
qty.addEventListener('click', alerttt);

const QTY = document.querySelector('#QTY');
