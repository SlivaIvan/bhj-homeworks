
const decreasesTheTimer = function(){ 
    const timer = document.getElementById("timer");
    let counterSeconds = Number(timer.textContent);

    if(counterSeconds > 0){
        counterSeconds--
        timer.innerHTML = counterSeconds;
    } else{
        return alert("Вы победили в конкурсе!");
    }   
}

setInterval(decreasesTheTimer, 1000);