const fingers = document.getElementById("fingerImg");
const spinBtn = document.getElementById("spin");
const winBtn = document.getElementById("winningsBtn");
const tossCount = document.getElementById("throwCount")
spinBtn.addEventListener("click",flick);
// winBtn.addEventListener("click", drink);
let totalThrows;

let fingerTotal;

function flick() {
    toss =Math.ceil(Math.random()*100);
    if (toss >=0 && toss < 35){
        fingers.setAttribute("src","images/1.jpg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }else if(toss >= 35&& toss <70){
        fingers.setAttribute("src","images/2.jpg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }else if(toss>=70 && toss <90){
        fingers.setAttribute("src","images/3.jpg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }else if(toss>=90 && toss < 95){
        fingers.setAttribute("src","images/4.jpg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }else if(toss>=99 && toss <= 100){
        fingers.setAttribute("src","images/nedbox.jpeg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }else{
        fingers.setAttribute("src","images/5.jpg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }
    console.log(toss)
}
