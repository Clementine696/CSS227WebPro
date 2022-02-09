let x = Math.floor(Math.random() * 100) + 1;
console.log("Random number is " + x);
let min = 1,max = 100 ,c=1;
let a = Number(prompt('Guess a number from 1 to 100'));
while(a!== x)
{
    if(a>=max || a<=min){
        c=-1;
        break;
    }
    if(a<x){
        min = a;
        c++;
        a = Number(prompt("Too little, Guess a number from " + min + " to " + max));
    }
    if(a>x){
        max = a;
        c++;
        a = Number(prompt("Too much, Guess a number from " + min + " to " + max));
    }
}
if(c!=-1)
    alert("Congrats! The number is " + x + " with " + c + " guessed!");
else
    alert("You give up. The number was " + x + ".");