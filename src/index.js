`use strict`;

const menuBtn = document.getElementById(`menu-btn`);
const closeBtn = document.getElementById(`close-btn`);
const navLinks = document.querySelector(`.nav-links`)

// Adding event to the menu btn

menuBtn.addEventListener(`click`,(e)=>{
    navLinks.classList.remove(`hidden`);
    menuBtn.classList.add(`hidden`);
    closeBtn.classList.remove(`hidden`)
})

// Adding event to the close btn

closeBtn.addEventListener(`click`,(e)=>{
    navLinks.classList.add(`hidden`);
    menuBtn.classList.remove(`hidden`);
    closeBtn.classList.add(`hidden`)
})