
const killsTime = function(){
    const clickerCounter = document.getElementById("clicker__counter");
    const cookie = document.getElementById("cookie");
    let counter = Number(clickerCounter.textContent);
    cookie.onclick = function(){
        counter++
        if(counter%2 === 0){
            cookie.width = 200;
        }else{
            cookie.width = 300;
        }
        clickerCounter.innerHTML = counter;
    }
}

killsTime();





