window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 20) {
      header.classList.add('glassy');
    } else {
      header.classList.remove('glassy');
    }
  });
  