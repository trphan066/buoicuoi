document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  const faders = document.querySelectorAll('.fade-in');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll); // Hiện luôn nếu đã có trên màn hình
