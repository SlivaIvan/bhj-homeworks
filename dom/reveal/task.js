const divs = document.querySelectorAll('.reveal');

function inVisable (){
 window.addEventListener('scroll', () =>{
    divs.forEach(div => {
        const {top, bottom} = div.getBoundingClientRect();

        if(top > window.innerHeight && bottom > 0){
            div.classList.remove('reveal_active')
        }else if (top < 0) {
            div.classList.remove('reveal_active')
        } else {
            div.classList.add('reveal_active')
        }
    })
 })

}

inVisable ()


