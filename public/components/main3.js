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
   statuss.openL2 =true;
   statuss.openL1 = false;
   statuss.openL3 = false;
   console.log(stats.openL2);
   console.log(stats.openL1);
   var statsString = JSON.stringify(statuss);
    localStorage.setItem("statusSukh" , statsString);
   window.location.href = '../../index.html';   
}

console.log(localStorage.getItem("statusSukh"));