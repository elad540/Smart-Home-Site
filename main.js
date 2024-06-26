const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav_items");

// open nav menu
menuBtn.addEventListener("click", () => { 
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});

// close nav menu
closeBtn.addEventListener("click", () => { 
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block'; 
    closeBtn.style.display = 'none';
});

// Add background style to the navigator bar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.
    scrollY > 0);
});

