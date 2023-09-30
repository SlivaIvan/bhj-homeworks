const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");

dropdownValue.addEventListener("click", ()=>{
    dropdownList.classList.add("dropdown__list_active");
})

dropdownList.addEventListener("click", (el)=>{
    el.preventDefault();
    dropdownValue.textContent = el.target.textContent;
    dropdownList.classList.remove('dropdown__list_active');
})



