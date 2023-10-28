document.addEventListener('DOMContentLoaded', () => {
   const text = document.getElementById('editor');
   const btn = document.querySelector('.btn');

   text.addEventListener('keyup', ()=>{
      localStorage.setItem('text',text.value);
   })

   text.value = localStorage.getItem('text');
   
   btn.addEventListener('click', () => {
      localStorage.removeItem('text');
      text.value = "";
   });
});