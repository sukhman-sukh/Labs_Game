// import http from 'http';
// import { status } from './module1.js';

const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');

// if(stats.L1Clear){
//     stats.openL2 = true;
//     stats.openL1 = false;
//     l2.style.display = 'block';
//     l1.style.display = 'none';
// }

// if(stats.L2Clear){
//     stats.openL2 = false;
//     stats.openL3 = true;
//     l3.style.display = 'block';
//     l2.style.display = 'none';
// }

if(stats.openL1){
    console.log("l1 open");
    l1.style.display = 'block';
    }
else if( !stats.openL1){
    l1.style.display = 'none';
    
}    
if(stats.openL2){
    console.log("l2 open");
    l2.style.display = 'block';
    }
else if( !stats.openL2){
    l2.style.display = 'none';
    
}    
if(stats.openL3){
    console.log("l3 open");
    l3.style.display = 'block';
    }
else if( !stats.openL3){
    l3.style.display = 'none';
    
}    