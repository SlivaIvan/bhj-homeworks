const caseElements = document.querySelectorAll('.rotator__case');

function iteratesText (){
    const activeElement = document.querySelector('.rotator__case_active');

    activeElement.classList.remove('rotator__case_active');

    let nextElement = activeElement.nextElementSibling;

    if(!nextElement){
        nextElement = caseElements[0];
    }
    nextElement.classList.add('rotator__case_active');

    const color = nextElement.getAttribute('data-color');
    nextElement.style.color = color;
    const speed = nextElement.getAttribute('data-speed');

    setTimeout(iteratesText, speed);
}
iteratesText ()


