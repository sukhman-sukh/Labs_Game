// import http from 'http';
// import { status } from './module1.js';

const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');


document.querySelector('#reset').addEventListener('click', f1 );

// The button was clicked!

function f1(){
    
    console.log('changed');
   OpenL2();
   CloseL1();
   CloseL3();
   console.log(stats.openL2);
   console.log(stats.openL1);
    
   window.location.href = '../../index.html';   
}