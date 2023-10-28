document.addEventListener('DOMContentLoaded', () => {
   // подключаем все нужные элементы
   const modal = document.querySelector('.modal');
   const modalClose = document.querySelector('.modal__close');
   //проверяем есть ли куки
   const cookieClose = document.cookie.includes('modalClose=true');
   
   if(!cookieClose){
      modal.classList.add('modal_active');
   }
   
   function setCookie(name, value){
      document.cookie = name + "=" + encodeURIComponent(value)+ ";" + "max-age=31536000"; ;
   }

   // Реализовываем закрытие окна
   modalClose.addEventListener('click', () => {
      setCookie('modalClose', true)
      modal.classList.remove('modal_active');
      console.log('click');
   })
   });
   