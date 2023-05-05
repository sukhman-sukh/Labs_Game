// import http from 'http';
// import { status } from './module1.js';

const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');

var statuss =JSON.parse(localStorage.getItem("statusSukh" )) ;

document.querySelector('#reset').addEventListener('click', f1 );

// The button was clicked!

function f1(){
    
    console.log('changed');
    statuss.openL2 =false;
    statuss.openL1 = true;
    statuss.openL3 = false;
    statuss.L1Clear = false;
    statuss.L2Clear = false;
    // l1.style.display = 'block';
    // l1.style.display = 'none';
   console.log(stats.openL2);
   console.log(stats.openL1);
   var statsString = JSON.stringify(statuss);
    localStorage.setItem("statusSukh" , statsString);
   window.location.href = '../../index.html';   
}

console.log(localStorage.getItem("statusSukh"));