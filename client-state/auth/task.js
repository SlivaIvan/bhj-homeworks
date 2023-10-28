// Создаем все соединения
document.addEventListener('DOMContentLoaded', () => {
const signin = document.querySelector('.signin');
const userForm = document.getElementById('signin__form');
const singoutButton = document.getElementById('signout__btn');
const welcomeActive = document.querySelector('.welcome');
const userID = document.getElementById('user_id');

//Проверяем есть ли сохраненый id

const stUser_id = localStorage.getItem('user_id');

if(stUser_id){
   welcomeActive.classList.add('welcome_active');
   signin.classList.remove('signin_active');
   userID.textContent = stUser_id;
} else{
   signin.classList.add('signin_active');
   welcomeActive.classList.remove('welcome_active');
}

// обрабатываем вход

userForm.addEventListener('submit', (e) => {
   e.preventDefault()

   //const xhr = new XMLHttpRequest();
   const formData = new FormData(userForm);
   const forms = userForm.action;

//отправляем данные на сервер

   fetch(forms, {
      method: 'POST',
      body: formData
   })
   .then(response => response.json())
   .then(response => {
      if(response.success){
         localStorage.setItem('user_id', response.user_id);
         welcomeActive.classList.add('welcome_active');
         signin.classList.remove('signin_active');
         userID.textContent = response.user_id;
         console.log(response.success)
      } else {
         alert("Неверный логин/пароль");
      }
   })

})

//Делаем выход

singoutButton.addEventListener('click', () => {
   signin.classList.add('signin_active');
   welcomeActive.classList.remove('welcome_active');
   localStorage.removeItem('user_id');
})


})



