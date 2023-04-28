// GAME VARIABLES

const canvas = document.getElementById("canvas1");
const ctx =canvas.getConext('2d') ;
let canvasWidth = 600;
let canvasHeight= 400;
let lastTime =0;

// GAME FUNCTIONS

function main(ctime)
{   window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime-lastTime)/1000 <1/2)
    {   return;
    }
    lastTime = ctime;
    
    gameEngine();

}

function gameEngine(){

}


// GAME LOGIC
window.requestAnimationFrame(main);