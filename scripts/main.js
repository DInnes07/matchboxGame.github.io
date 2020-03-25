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
    }else if(toss >= 35&& toss <80){
        fingers.setAttribute("src","images/2.jpg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }else if(toss>=80 && toss <95){
        fingers.setAttribute("src","images/3.jpg");
        totalThrows = parseInt(tossCount.innerText);
        totalThrows++;
        tossCount.innerText= totalThrows;
    }else if(toss>=95 && toss < 97){
        fingers.setAttribute("src","images/4.jpg");
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
