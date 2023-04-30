document.addEventListener('DOMContentLoaded', function () {
  //variables
  //nav
  const navLinks = document.querySelectorAll('.navlist a');
  const sections = document.querySelectorAll('.section');
  const btns = document.querySelectorAll('.btn');
  const header = document.querySelector('header');
  let menu = document.querySelector('#menu-icon');
  let navList = document.querySelector('.navlist');
  document.getElementById("automaticyear").innerHTML = new Date().getFullYear();

  // popup
  let moreInfoLinks = document.querySelectorAll('.more-info-link');
  let btnClose = document.querySelectorAll('.close-btn');
  let overlays = document.querySelectorAll('.overlay');
  let body = document.querySelector('body');
  // open the correct popup
  moreInfoLinks.forEach(link => { 
    link.addEventListener('click', event => {
      event.preventDefault(); // Prevent default anchor tag behavior
      let popupId = link.getAttribute('data-popup-id');
      let popup = document.getElementById(popupId);
      popup.classList.toggle('active');
      body.classList.add('popup-open');
    });
  });
  // Close active popup on "esc" key press
  document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    let activePopup = document.querySelector('.popup.active');
    if (activePopup) {
      activePopup.classList.remove('active');
      body.classList.remove('popup-open');
    }
  }
  });
  // close on mouse click outside popup
  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => { 
      let activePopup = document.querySelector('.popup.active');
      if (activePopup) {
        activePopup.classList.remove('active');
        body.classList.remove('popup-open');
      }
    });
  });
  // Close active popup on button press
  btnClose.forEach(button => {
    button.onclick = () => {
      let activePopup = document.querySelector('.popup.active');
      if (activePopup) {
        activePopup.classList.remove('active');
        body.classList.remove('popup-open');
      }
    }
  });

  // navbar
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
  };

  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
  };

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
      header.classList.toggle("sticky", window.scrollY > 100);
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      navLinks.forEach(link => link.classList.remove('active'));
      const current = btn.getAttribute('href').substring(1);
      document.getElementById(current).scrollIntoView({
        behavior: 'smooth'
      });
      navLinks.forEach(link => {
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  });
});
