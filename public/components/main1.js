// import http from 'http';
// import { status } from './module1.js';

// var stats ={
    
//     L1Clear : false,
//      L2Clear : false,
//     L3Clear : false,
//     openL1 : true,
//     openL2 : false,
//      openL3 : false,
        
//     };

// var statss = localStorage.getItem("statusSukh");  


if(localStorage.getItem("statusSukh" ) == null ){
    console.log("set");
    var stats ={
        
        L1Clear : false,
        L2Clear : false,
        L3Clear : false,
        openL1 : true,
        openL2 : false,
        openL3 : false,
        
    };
    var statsString = JSON.stringify(stats);
    localStorage.setItem("statusSukh" , statsString);
    
    } 
    console.log(localStorage.getItem("statusSukh"));
var statuss = JSON.parse(localStorage.getItem("statusSukh")) ;
const l1 = document.getElementById('l1');

const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');

if(statuss.L1Clear){
    statuss.openL2 = true;
    l1.style.color = 'black';
    l1.style.backgroundColor = "yellow";
    statuss.openL1 = false;
    l2.style.display = 'block';
    
    // l1.style.display = 'none';
}
else{
    l1.style.display = 'block';
    
    l2.style.display = 'none';
}

if(statuss.L2Clear){
    statuss.openL2 = false;
    statuss.openL3 = true;
    l2.style.color = 'black';
    l2.style.backgroundColor = "yellow";
   
    l3.style.display = 'block';
    // l2.style.display = 'none';
}

// var statuss =JSON.parse(localStorage.getItem("statusSukh" )) ;

// if(statuss.openL1){
//     console.log("l1 open");
//     l1.style.display = 'block';
//     }
// else if( !statuss.openL1){
    // l1.style.display = 'block';
//     l1.style.display = 'none';
    
// }    
// if(statuss.openL2){
//     console.log("l2 open");
//     l2.style.display = 'block';
//     }
// else if( !statuss.openL2){
//     l2.style.display = 'none';
    
// }    
// if(statuss.openL3){
//     console.log("l3 open");
//     l3.style.display = 'block';
//     }
// else if( !statuss.openL3){
//     l3.style.display = 'none';
    
// }    
var statsString = JSON.stringify(statuss);
    localStorage.setItem("statusSukh" , statsString);
document.querySelector('#l1').addEventListener('click', f1);

function f1(){
    if(statuss.openL1 == true){
    window.location.href = 'public/Screens/index2.html';
}}

document.querySelector('#l2').addEventListener('click', f2);

function f2(){
    if(statuss.openL2 == true){
    window.location.href = 'public/Screens/index3.html';
}}
