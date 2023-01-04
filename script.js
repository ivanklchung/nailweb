// Navigation Bar
const menu = document.querySelector('.menu')
const navigationbar = document.querySelector('.navigationbar')

//add Change to navigation bar when clicked
//when clicked again, all changes will be reverted to original
menu.addEventListener('click',()=>{
    navigationbar.classList.toggle('change')
    menu.classList.toggle('change')
})








