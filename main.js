let toggleBtn = document.querySelector('.humburger-menu');
let icon = document.getElementById('icon-humburger');
let mobileNavbar = document.querySelector('.mobile-navbar');
let header = document.querySelector('.header');

toggleBtn.addEventListener('click', () => {
    if(icon.classList == 'fa-solid fa-bars'){
        icon.classList = "fa-solid fa-xmark";
    } else {
        icon.classList = 'fa-solid fa-bars'
    }
    header.classList.toggle('height');
})