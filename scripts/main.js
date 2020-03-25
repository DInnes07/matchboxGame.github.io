const fingers = document.getElementById("fingerImg");
const spinBtn = document.getElementById("spin");
const winBtn = document.getElementById("winningsBtn");
spinBtn.addEventListener("click",flick);
// winBtn.addEventListener("click", drink);
let totalThrows;

let fingerTotal;

function flick() {
    toss =Math.ceil(Math.random()*100);
    if (toss >=0 && toss < 35){
        fingers.setAttribute("src","images/1.jpg");
    }else if(toss >= 35&& toss <70){
        fingers.setAttribute("src","images/2.jpg");
    }else if(toss>=70 && toss <90){
        fingers.setAttribute("src","images/3.jpg");
    }else if(toss>=90 && toss < 95){
        fingers.setAttribute("src","images/4.jpg");
    }else if(toss>=99 && toss <= 100){
        fingers.setAttribute("src","images/nedbox.jpeg");
    }else{
        fingers.setAttribute("src","images/5.jpg");
    }
    console.log(toss)
}
