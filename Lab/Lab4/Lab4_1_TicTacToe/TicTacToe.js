function add1(){
    if(turn=="X"){
        block1.innerHTML = "X";
        turn = "O";
        arr[0][0] = 1;
    }
    else{
        block1.innerHTML = "O";
        turn = "X";
        arr[0][0] = 2;
    }
    block1.removeEventListener('click',add1);
    checkWin();
}

function add2(){
    if(turn=="X"){
        block2.innerHTML = "X";
        turn = "O";
        arr[0][1] = 1;
    }
    else{
        block2.innerHTML = "O";
        turn = "X";
        arr[0][1] = 2;
    }
    block2.removeEventListener('click',add2);
    checkWin();
}

function add3(){
    if(turn=="X"){
        block3.innerHTML = "X";
        turn = "O";
        arr[0][2] = 1;
    }
    else{
        block3.innerHTML = "O";
        turn = "X";
        arr[0][2] = 2;
    }
    block3.removeEventListener('click',add3);
    checkWin();
}

function add4(){
    if(turn=="X"){
        block4.innerHTML = "X";
        turn = "O";
        arr[1][0] = 1;
    }
    else{
        block4.innerHTML = "O";
        turn = "X";
        arr[1][0] = 2;
    }
    block4.removeEventListener('click',add4);
    checkWin();
}

function add5(){
    if(turn=="X"){
        block5.innerHTML = "X";
        turn = "O";
        arr[1][1] = 1;
    }
    else{
        block5.innerHTML = "O";
        turn = "X";
        arr[1][1] = 2;
    }
    block5.removeEventListener('click',add5);
    checkWin();
}

function add6(){
    if(turn=="X"){
        block6.innerHTML = "X";
        turn = "O";
        arr[1][2] = 1;
    }
    else{
        block6.innerHTML = "O";
        turn = "X";
        arr[1][2] = 2;
    }
    block6.removeEventListener('click',add6);
    checkWin();
}

function add7(){
    if(turn=="X"){
        block7.innerHTML = "X";
        turn = "O";
        arr[2][0] = 1;
    }
    else{
        block7.innerHTML = "O";
        turn = "X";
        arr[2][0] = 2;
    }
    block7.removeEventListener('click',add7);
    checkWin();
}

function add8(){
    if(turn=="X"){
        block8.innerHTML = "X";
        turn = "O";
        arr[2][1] = 1;
    }
    else{
        block8.innerHTML = "O";
        turn = "X";
        arr[2][1] = 2;
    }
    block8.removeEventListener('click',add8);
    checkWin();
}

function add9(){
    if(turn=="X"){
        block9.innerHTML = "X";
        turn = "O";
        arr[2][2] = 1;
    }
    else{
        block9.innerHTML = "O";
        turn = "X";
        arr[2][2] = 2;
    }
    block9.removeEventListener('click',add9);
    checkWin();
}

function RandomO(){
    while(true){
        let x = Math.floor(Math.random() * 3);
        let y = Math.floor(Math.random() * 3);
        if(arr[x][y]==0){
            if(x==0&&y==0)
                add1();
            else if(x==0&&y==1)
                add2();
            else if(x==0&&y==2)
                add3();
            else if(x==1&&y==0)
                add4();
            else if(x==1&&y==1)
                add5();
            else if(x==1&&y==2)
                add6();
            else if(x==2&&y==0)
                add7();
            else if(x==2&&y==1)
                add8();
            else if(x==2&&y==2)
                add9();
            break;
        }
    }
}
        

function checkWin(){
    c++;
    let X3=0,O3=0,X4=0,O4=0;
    for(i=0;i<3;i++)
    {
        let X1=0,O1=0,X2=0,O2=0;
        for(j=0;j<3;j++)
        {
            if(arr[i][j]==1)
                X1++;
            else if(arr[i][j]==2)
                O1++;
            if(arr[j][i]==1)
                X2++;
            else if(arr[j][i]==2)
                O2++;
            if(i==j)
            {
                if(arr[i][j]==1)
                    X3++;
                else if(arr[i][j]==2)
                    O3++;
            }
            if(i==2&&j==0)
            {
                if(arr[i][j]==1)
                    X4++;
                else if(arr[i][j]==2)
                    O4++;
            }
            if(i==1&&j==1)
            {
                if(arr[i][j]==1)
                    X4++;
                else if(arr[i][j]==2)
                    O4++;
            }
            if(i==0&&j==2)
            {
                if(arr[i][j]==1)
                    X4++;
                else if(arr[i][j]==2)
                    O4++;
            }
        }
        if(X1==3||X2==3||X3==3||X4==3)
        {
            block1.removeEventListener('click',add1);
            block2.removeEventListener('click',add2);
            block3.removeEventListener('click',add3);
            block4.removeEventListener('click',add4);
            block5.removeEventListener('click',add5);
            block6.removeEventListener('click',add6);
            block7.removeEventListener('click',add7);
            block8.removeEventListener('click',add8);
            block9.removeEventListener('click',add9);
            const xwin = document.querySelector('#xwin');
            xwin.classList.remove('hidden');
            return 0;
        }
        if(O1==3||O2==3||O3==3||O4==3)
        {
            block1.removeEventListener('click',add1);
            block2.removeEventListener('click',add2);
            block3.removeEventListener('click',add3);
            block4.removeEventListener('click',add4);
            block5.removeEventListener('click',add5);
            block6.removeEventListener('click',add6);
            block7.removeEventListener('click',add7);
            block8.removeEventListener('click',add8);
            block9.removeEventListener('click',add9);
            const owin = document.querySelector('#owin');
            owin.classList.remove('hidden');
            return 0;
        }
    }
    if(c==9){
        console.log("tie");
        const tie = document.querySelector('#tie');
        tie.classList.remove('hidden');
        return 0;
    }
    if(turn=="O")
    {
        RandomO();
    }
}

let arr = [[0,0,0],[0,0,0],[0,0,0]];
let c=0;

const block1 = document.querySelector('#block1');
const block2 = document.querySelector('#block2');
const block3 = document.querySelector('#block3');
const block4 = document.querySelector('#block4');
const block5 = document.querySelector('#block5');
const block6 = document.querySelector('#block6');
const block7 = document.querySelector('#block7');
const block8 = document.querySelector('#block8');
const block9 = document.querySelector('#block9');

block1.addEventListener('click', add1);
block2.addEventListener('click', add2);
block3.addEventListener('click', add3);
block4.addEventListener('click', add4);
block5.addEventListener('click', add5);
block6.addEventListener('click', add6);
block7.addEventListener('click', add7);
block8.addEventListener('click', add8);
block9.addEventListener('click', add9);

let turn="X";