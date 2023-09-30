const timer = document.getElementById("timer");
let counterSeconds = Number(timer.textContent);

const decreasesTheTimer = function(){    
    if(counterSeconds > 0){
        counterSeconds--
        timer.innerHTML = counterSeconds;
    } else{
        alert("Вы победили в конкурсе!");
        clearInterval("interval");
    }   
}

const interval = setInterval(decreasesTheTimer, 1000);