// GAME VARIABLES
// import http from 'http';
// import { status } from './module1.js';

const canvas = document.getElementById("canvas1");
const scorediv = document.getElementById("score");
const thorn = document.getElementById("thorns");
const thorn2 = document.getElementById("thorn2");
const thorn3 = document.getElementById("thorn3");
const lowBlock = document.getElementById("lowLand");
const highBlock = document.getElementById("highLand");
const bigBlock = document.getElementById("bigBlock");
const platform = document.getElementById("platform");
const bigBlock2 = document.getElementById("bigBlock2");
const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const dagger = document.getElementById('dagger');

const gameBall = document.getElementById('gameBall');

let score = 0;
let keyPressed = true;
//              [L,U,D,R]
let keyStatus = [0, 0, 0, 0];
let distance = 0;
let pass = true;
let cyInitial = 0;
let canvasWidth = 600;

let platformleft = 115;
let oLeft = 100;
let oRight = 120;

// let platformleft = 50;
// let oLeft = 45;
// let oRight = 55;


let thorn1Pass =false;
let thorn2Pass = false;
let thorn3Pass = false;
let canvasHeight = 400;
let lastTime = 0;
let gameEnd = false;
let thornLeft = 100;
let thorn2Left = 100;
let thorn3Left = 114;
let lowBlockLeft = 100;
let highBlockLeft = 100;
let bigBlockLeft = 100;
let daggerLeft = 200;
let bigBlock2Left = 130;
// let thornRight=thornLeft+thorn.clientWidth;
let thornWidht = 10;
let cx = 0;
let apperentCx = 50;
let cy = 0;
let velocityY = 1;
// let gravity = 1;
let cxLast = cx;
let velocity = 2;
let isJumping = false;
const acceleration = 0;
const friction = 0;
let cWidth = 10;
// GAME FUNCTIONS

function main(ctime) {
    window.requestAnimationFrame(main);

    if ((ctime - lastTime) / 1000 < 1 / 2) {
        return;
    }
    console.log(ctime);
    lastTime = ctime;

    gameEngine();

}

function gameEngine() {
    if (gameEnd == true) {
        window.location.href = "../../index.html";
    }
    check();
    move();
    updateScreen();
    

}

function check() {
    let cRight = cx + cWidth;
    let thornRight = thornLeft + thornWidht;
    let lowBlockRight = lowBlockLeft + 10;
    let highBlockRight = highBlockLeft + 10;
    apperentCx = 50 + cx / 2;
    console.log("cxLeft = " + apperentCx);
    // console.log("thornLeft = "+thornLeft);
    // // console.log("thornRight = "+thornRight);
    // // console.log("lowBlockLeft = " + lowBlockLeft);
    // // console.log("lowBlockRight = " + lowBlockRight);

    // // console.log("highBlockLeft = " + highBlockLeft);
    // // console.log("highBlockRight = " + highBlockRight);
    console.log("bigBlock = "+bigBlockLeft);

    // console.log("cy = " + cy);
    // console.log("cxLeft = "+cx);

    if (((apperentCx >= thornLeft && apperentCx <= thornRight && thorn1Pass == false)
        // || (cRight >=thornLeft && cRight  <= thornRight )
    ) && cy == 0) {
        console.log("entered");
        thorn1Pass = true;
        L1Clear = false;
        gameEnd = true;
        // gameEngine();
    }
    else if (apperentCx > thornLeft + thornWidht) {
        if (score < 10) {
            celebrate();
            score = score + 10;
        }
    }

    // if (((apperentCx >= thorn2Left && apperentCx <= thorn2Left+thornWidht && thorn2Pass == false)
    // // || (cRight >=thornLeft && cRight  <= thornRight )
    //     ) && cy == 0) {
    //         console.log("entered");
    //         thorn2Pass = true;
    //         L1Clear = false;
    //         gameEnd = true;
    //         // gameEngine();
    //     }
    //     if (((apperentCx >= thorn3Left && apperentCx <= thorn3Left+thornWidht && thorn3Pass == false)
    //     // || (cRight >=thornLeft && cRight  <= thornRight )
    //         ) && cy == 0) {
    //             console.log("entered");
    //             thorn3Pass = true;
    //             L1Clear = false;
    //             gameEnd = true;
    //             // gameEngine();
    //         }
    if (apperentCx >= bigBlockLeft && apperentCx<=bigBlockLeft+16 && cy <= 29) {
        console.log("thouched the big block");
        pass = false;
    }
    else {
        pass = true;
    }
    if (apperentCx >= bigBlock2Left && apperentCx<=bigBlock2Left+16 && cy <= 29) {
        console.log("thouched the big block");
        pass = false;
    }
    else {
        pass = true;
    }
    if (apperentCx >= bigBlockLeft && apperentCx <= bigBlockLeft + 16 && cy >= 34) {
        cy = 30;
        cyInitial = 30;
        gameBall.style.position = 'relative';
        gameBall.style.marginBottom = cy + '%';
        if (score < 20) {
            
            star2.style.display = 'block';
            star2.classList.add('starAnimate');
            score = score + 10;
        }

    }
    
    if (apperentCx >= highBlockLeft && apperentCx <= highBlockLeft + 10 && cy >= 23) {
        cy = 20;
        cyInitial = 20;
        gameBall.style.position = 'relative';
        gameBall.style.marginBottom = cy + '%';

    }
    if (apperentCx >= lowBlockLeft && apperentCx <= lowBlockLeft + 10 && cy >= 15) {
        cy = 11;
        cyInitial = 11;
        gameBall.style.position = 'relative';
        gameBall.style.marginBottom = cy + '%';

    }
    if(apperentCx <=platformleft+10 && apperentCx >=platformleft && cy >=28 ){
        cy =30;
        cyInitial =30;
        gameBall.style.marginBottom = cy +"%";
        gameBall.style.marginLeft = platformleft+'%';
    }
    else if(apperentCx > bigBlockLeft + 16  && keyPressed == false)
    {
        cyInitial = 0;
        cy =0;
        gameBall.style.position = 'relative';
        gameBall.style.marginBottom = cy + '%';
    }
    else if(apperentCx > bigBlock2Left + 16  && keyPressed == false)
    {
        cyInitial = 0;
        cy =0;
        gameBall.style.position = 'relative';
        gameBall.style.marginBottom = cy + '%';
    }

    else if (apperentCx < lowBlockLeft || (apperentCx > lowBlockLeft + 10 && apperentCx < highBlockLeft) || (apperentCx > highBlockLeft + 10 && apperentCx < bigBlockLeft) || apperentCx > bigBlockLeft + 16) {
        console.log("should fall now");
        cyInitial = 0;

    }

    if(apperentCx >= daggerLeft)
    {
        L1Clear =true;
        gameEnd = true;
    }
    if (apperentCx >= bigBlock2Left && apperentCx <= bigBlock2Left + 16 && cy >= 34) {
        cy = 30;
        cyInitial = 30;
        console.log("at big blovk 2");
        gameBall.style.position = 'relative';
        gameBall.style.marginBottom = cy + '%';
        if (score < 30) {
            
            star3.style.display = 'block';
            star3.classList.add('starAnimate');
            score = score + 10;
        }

    }
   
}
function move() {
    if (velocity > 0) {
        velocity = velocity - friction;
    }
    document.onkeydown = function (e) {
        velocity = 1;
        if (e.key == 'ArrowRight') {
            keyStatus[3] = 1;
        }
        if (e.key == 'ArrowUp') {
            keyStatus[1] = 1;
        }
        if (e.key == 'ArrowLeft') {
            keyStatus[0] = 1;
        }
        if (e.key == 'ArrowDown') {
            keyStatus[2] = 1;
        }
        if (keyStatus[3] == 1 && keyStatus[1] == 1) {
            velocity = 2;

            keyPressed = true;
            moveForward();
            jump();
            //    gameBall.classList.add('jumpanimation');
            //    console.log("right and up");

        }
        if (keyStatus[0] == 1 && keyStatus[1] == 1) {
            velocity = 2;
            keyPressed = true;
            moveBackward();
            jump();
            //    gameBall.classList.add('jumpanimation');
            //    console.log("left and up");

        }
        else if (keyStatus[3] == 1) {
            gameBall.classList.add('frontanimation');
            keyPressed = true;
            moveForward();

        }

        else if (keyStatus[0] == 1) {
            keyPressed = true;
            gameBall.classList.add('backanimation');
            moveBackward();

        }
        else if (keyStatus[1] == 1) {
            keyPressed = true;
            jump()
            //    gameBall.classList.add('jumpanimation');
        }

    }
    document.onkeyup = function (e) {
        if (e.key == 'ArrowRight') {
            keyStatus[3] = 0;
        }
        if (e.key == 'ArrowUp') {
            keyStatus[1] = 0;
        }
        if (e.key == 'ArrowLeft') {
            keyStatus[0] = 0;
        }
        if (e.key == 'ArrowDown') {
            keyStatus[2] = 0;
        }
        if (keyStatus[0] == 1 && keyStatus[1] == 1) {

            keyPressed = false;

            fall();
            //    gameBall.classList.add('jumpanimation');
            //    console.log("left and up");

        }
        if (keyStatus[0] == 1 && keyStatus[1] == 1) {

            keyPressed = false;

            fall();
            //    gameBall.classList.add('jumpanimation');
            //    console.log("left and up");

        }
        if (e.key == 'ArrowRight') {
            keyPressed = false;
            gameBall.classList.remove('frontanimation');
        }
        else if (e.key == 'ArrowLeft') {
            keyPressed = false;
            gameBall.classList.remove('backanimation');
        }
        else if (e.key == 'ArrowUp') {
            keyPressed = false;
            fall();
            //    gameBall.classList.remove('jumpanimation');
        }
    }
}

function celebrate() {
    star1.style.display = 'block';
    star1.classList.add('starAnimate');
}

function moveForward() {
    if (cx < 60 && pass == true) {
        cx = cx + velocity;
        gameBall.style.position = 'relative';
        gameBall.style.marginLeft = cx + '%';
    }
    if (velocity <= 3) {
        velocity = velocity + acceleration;
    }

}

function moveBackward() {
    // if(cx> -90)
    {
        cx = cx - velocity;
        gameBall.style.position = 'relative';
        gameBall.style.marginLeft = cx + '%';
    }
    if (velocity <= 3) {
        velocity = velocity - acceleration;
    }
}

function jump() {

    gameBall.style.position = 'relative';
    if (cy <= 15 + cyInitial) {
        cy = cy + velocityY;
        gameBall.style.marginBottom = cy + '%';


        console.log(cy);
    }
}

function fall() {
    gameBall.style.position = 'relative';

    while (cy - cyInitial > 0) {

        cy = cy - velocityY / 100;
        gameBall.style.marginBottom = cy + '%';

        console.log(cy);

    }
    cy = cyInitial;
    gameBall.style.marginBottom = cy + '%';

}


function updateScreen() {
    scorediv.innerHTML = 'Score :- ' + score;
    oscillate();
    if (cx >= 30 && keyPressed == true && pass == true && keyStatus[3] == 1) {
        distance = distance + 1;
    }
    console.log(distance);
    if (distance >= 5 && cx >= 30 && keyPressed == true && keyStatus[3] == 1 && pass == true) {
        thornLand();
    }
    if (distance >= 19 && cx >= 30 && keyPressed == true && keyStatus[3] == 1 && pass == true) {
        blocks();
    }
    if (distance >= 40 && cx >= 30 && keyPressed == true && keyStatus[3] == 1 && pass == true) {
        thorn2Land();
    }
    
    cxLast = cx;
}
let p=0;
function oscillate(){

    console.log(" platform left  "+platformleft );
    console.log(" oLeft  "+oLeft );
    console.log(" Oright  "+oRight );
    
    
    
    if(platformleft <=oLeft){p=1;}
    if(platformleft >=oRight){p=0;}

    if(p == 0){
        platformleft =platformleft -2;
    }
    if(p ==1){
        platformleft = platformleft +2
    }
    platform.style.marginLeft = platformleft+'%';
}
function thornLand() {
    thornLeft = thornLeft - 2;
    // console.log("print thorn left  "+thornLeft);
    // thorn.style.position = 'absolute';
    thorn.style.display = 'block';
    thorn.style.marginLeft = thornLeft + '%';
}

function thorn2Land() {
    thorn2Left = thorn2Left - 2;
    bigBlock2Left = bigBlock2Left - 2;
    bigBlock2.style.marginLeft = bigBlock2Left + '%';
    // console.log("print thorn left  "+thornLeft);
    thorn2.style.position = 'absolute';

    thorn2.style.display = 'block';
    thorn2.style.marginLeft = thorn2Left + '%';

    thorn3Left = thorn3Left - 2;
    thorn3.style.position = 'absolute';
    thorn3.style.display = 'block';
    thorn3.style.marginLeft = thorn3Left + '%';

    platformleft = platformleft -2;
    platform.style.marginLeft = platformleft + '%';
    oLeft -=2;
    oRight -= 2; 
    
    daggerLeft = daggerLeft - 2;
    dagger.style.position = 'absolute';
    dagger.style.display = 'block';
    dagger.style.marginLeft = daggerLeft + '%';

    // 
}

function blocks() {
    lowBlockLeft = lowBlockLeft - 2;
    lowBlock.style.marginLeft = lowBlockLeft + '%';

    if (distance >= 25 && cx >= 30 && keyPressed == true) {
        highBlockLeft = highBlockLeft - 2;
        highBlock.style.marginLeft = highBlockLeft + '%';
    }
    if (distance >= 31 && cx >= 30 && keyPressed == true) {
        bigBlockLeft = bigBlockLeft - 2;
        bigBlock.style.marginLeft = bigBlockLeft + '%';
    }
}

// GAME LOGIC
window.requestAnimationFrame(main);