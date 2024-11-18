let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.mult', {
    strings: ['Frontend Developer', 'Content Creation', 'Video Editor', 'Web Designer', 'YouTuber'],
    typeSpeed: 80,
  });
