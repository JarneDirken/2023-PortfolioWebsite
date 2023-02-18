document.addEventListener('DOMContentLoaded', function () {
  //variables
  const navLinks = document.querySelectorAll('.navlist a');
  const sections = document.querySelectorAll('.section');
  const btns = document.querySelectorAll('.btn');
  const header = document.querySelector('header');
  let menu = document.querySelector('#menu-icon');
  let navList = document.querySelector('.navlist');
  var btn = document.getElementById('btn');

  btn.onclick = () => {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var descrption = document.getElementById('description').value;
    var body = 'Name: ' +name +'<br/>'+'Email: ' + email+'<br/>'+'Number: ' + number+'<br/>'+'Descrption: ' + descrption;

        Email.send({
          SecureToken : "30bef5d6-88ef-47aa-b5cc-6eb4a82d56aa",
          To : 'bullshifirstclass@gmail.com',
          From : email,
          Subject : "A new form has been submitted!",
          Body : body
      }).then(
        message => alert(message)
      );
  };

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
