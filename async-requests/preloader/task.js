const xhr = new XMLHttpRequest();
const items = document.getElementById('items');
const loader = document.querySelector('.loader');
xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState === xhr.DONE){
        if(xhr.status === 200){
            loader.classList.remove('loader_active');
            const box = JSON.parse(xhr.response);
            const valute = box.response.Valute;
            console.log(valute);
            for (const key in valute) {
                const divItem = document.createElement('div');
                divItem.classList = 'item';
    
                const divItemCode = document.createElement('div');
                divItemCode.classList = 'item__code';
                divItemCode.textContent = valute[key].CharCode;

                const divItemValue = document.createElement('div');
                divItemValue.classList = 'item__value';
                divItemValue.textContent = valute[key].Value;

                const divItemCurrecy = document.createElement('div');
                divItemCurrecy.classList = 'item__currency';
                divItemCurrecy.textContent ='руб.';

                items.appendChild(divItem);
                divItem.appendChild(divItemCode);
                divItem.appendChild(divItemValue);
                divItem.appendChild(divItemCurrecy);
            }
        
        }
        
    }
    
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();