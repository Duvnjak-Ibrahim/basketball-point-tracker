let numpointLeft = document.getElementById("num-left");
let numpointRight = document.getElementById("num-right");
let points1 = 0;
let points2 = 0;

function plus1point() {
    points1+=1;
    numpointLeft.textContent = points1;
    
}


function plus2points() {
    points1+=2;
    numpointLeft.textContent = points1;
    
}

function plus3points() {
    points1+=3;
    numpointLeft.textContent = points1;
    
}


function plus1points() {
    points2+=1;
    numpointRight.textContent = points2;
    
}

function plus2point() {
    points2+=2;
    numpointRight.textContent = points2;
    
}


function plus3point() {
    points2+=3;
    numpointRight.textContent = points2;
    
}


function reset(){
    numpointLeft.textContent= 0
    numpointRight.textContent=0
    points1 =0
    points2=0
    
}