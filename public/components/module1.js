var stats ={
    
L1Clear : false,
 L2Clear : false,
L3Clear : false,
openL1 : true,
openL2 : false,
 openL3 : false,
    
};

function OpenL1(){
    console.log('l1 opened');
    stats.openL1 = true;
}

function CloseL1(){
    stats.openL1 = false;
}
function OpenL2(){

    console.log('l2 opened');
    stats.openL2 = true;
    
}

function CloseL2(){
    stats.openL2 = false;
}
function OpenL3(){

    console.log('l3 opened');
    stats.openL3 = true;
}

function CloseL3(){
    stats.openL3 = false;
}