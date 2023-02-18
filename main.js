document.addEventListener('DOMContentLoaded', function () {
  //variables
  const navLinks = document.querySelectorAll('.navlist a');
  const sections = document.querySelectorAll('.section');
  const btns = document.querySelectorAll('.btn');
  const header = document.querySelector('header');
  let menu = document.querySelector('#menu-icon');
  let navList = document.querySelector('.navlist');

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
