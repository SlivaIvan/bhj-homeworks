let xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

xhr.addEventListener('readystatechange', () =>{
    if(xhr.readyState === xhr.DONE){
        let ad = JSON.parse(xhr.response);
        pollTitle.innerHTML = ad.data.title
        const answers = ad.data.answers;
        answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList = 'poll__answer';
            button.textContent = answer;
            pollAnswers.appendChild(button);

            button.addEventListener('click', ()=>{
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();


