const moleKiller = function(){
    // Переменные для счета кликов
    let dead = document.getElementById("dead");
    let lost = document.getElementById("lost");
    bodyCount = Number(dead.textContent);
    missСounter = Number(lost.textContent);

    // Ограничение количества кротов для выйгрыша
    const amountToWin = 10;
    // Создаем функцию getHole в который будет передаваться индекс из цикла
    getHole = index => document.getElementById(`hole${index}`)
    // Создаем цикл
    for(let i = 1; i < 10; i++){
        let hole = getHole(i); // Создаем переменную в которую передаем один элемент hole
        hole.onclick = function(){ // Создаем событие на одном элементе
            if(hole.classList.contains("hole_has-mole")){ // Проверяем содержит ли элемент класс
                bodyCount++
                dead.innerHTML = bodyCount;
            } else {
                missСounter++
                lost.innerHTML = missСounter;
            }
            //Проверяем на выйгрыш или проигрыш
            if(bodyCount === amountToWin){
                alert("Вы победили!");
                restartsTheGame()   
            } else if (missСounter === 5){
                alert("Вы проиграли!");
                restartsTheGame()
            }
        }   
    }
    function restartsTheGame(){
        dead.innerHTML = 0;
        lost.innerHTML = 0;
        bodyCount =0;
        missСounter = 0;
    }
}
moleKiller();